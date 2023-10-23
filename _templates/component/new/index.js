/** `RegExp` Checks each time apprears a space, a minus or an underscore */
const separatorsRegExp = /\s|_|-/gm
/** `RegExp` Checks word's first letter at text start */
const firstLetterRegExp = /^\w/gm
/** `RegExp` Checks word's first letter each time it is preceded by a space, a minus or an underscore */
const afterSeparatorFirstLetterRegExp = /(?<=(\s|\_|-))[a-z]/gm
/** `RegExp` Checks word's first letter at text start and each time it is preceded by a space, a minus or an underscore */
const firstLetterAndAfterSeparatorRegExp = /^\w|(?<=(\s|\_|-))[a-z]/gm

const capitalizeText = text => text.replace(firstLetterRegExp, (match) => match.toUpperCase())

const parseCamelCaseName = (name, startLowerCase = false) => (
  name
    .toLowerCase()
    .replace(
      startLowerCase === true
        ? afterSeparatorFirstLetterRegExp
        : firstLetterAndAfterSeparatorRegExp,
      (nameFragment => capitalizeText(nameFragment))
    )
    .replaceAll(separatorsRegExp, '')
)

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [{
      type: 'input',
      name: 'name',
      message: 'Which will be the name of that new component? (you can introduce several words like "new idea")',
    },
    {
      type: "select",
      name: "route",
      message: "Which type you will be?",
      choices: [
        'atom => Single composition, minor logic related to mentioned component',
        'molecule => Composed by one or several atoms',
        'organism => Composed by one or several molecules and/or atoms'
      ]
    },
    {
      type: "select",
      name: "isSimple",
      message: "It will be a simple or composed?",
      choices: [
        'simple => Will use only a single tag to wrap its content (like Button)',
        'composed => Will need a container to wrap the initial tag and its content (like Select)'
      ]
    }]

    return inquirer
      .prompt(questions)
      .then(({ name, route, isSimple }) => {
        if (name === '') {
          throw new Error('[name] should not be an empty string')
        }

        const underName = parseCamelCaseName(name, true)
        name = parseCamelCaseName(name)
        route = `${route.split(' => ')[0]}`
        isSimple = `${isSimple.split(' => ')[0]}` === 'simple'

        return {
          name,
          route,
          fileRoute: `src/components/${route}s/${name}/index`,
          storyRoute: `${capitalizeText(route)}s/${name}`,
          underName,
          isSimple,
          testStylingPropName: 'isACssTestClass',
          testStylingPropValue: 'is-test-only-class'
        }
      })
  },
}