const separatorsRegExp = /\s|_/gm
const firstLetterRegExp = /^\w/gm
const afterSeparatorFirstLetterRegExp = /(?<=(\s|\_))[a-z]/gm
const firstLetterAndAfterSeparatorRegExp = /^\w|(?<=(\s|\_))[a-z]/gm

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
      message: 'Name of component? (ex: AddContactForm)',
    },
    {
      type: "select",
      name: "route",
      message: "Which type you will need",
      choices: ['atom', 'molecule', 'organism']
    }]

    return inquirer
      .prompt(questions)
      .then(({ name, route }) => {
        if (name === '') {
          throw new Error('[name] should not be an empty string')
        }

        const underName = parseCamelCaseName(name, true)
        name = parseCamelCaseName(name)

        return {
          name,
          route,
          fullRoute: `${route}s/${name}`,
          storyRoute: `${capitalizeText(route)}s`,
          underName
        }
      })
  },
}