import { ParseTestIdProps } from '../interfaces/functionProps'

/**
 * @param { Array<string | null> } _classes Required. Array of classNames on `string` (or `null`) values
 * @returns { string } A single string product of merge all classNames, separated by spaces
 */
export const parseClasses = (_classes: Array<string | null>): string =>
  _classes.filter(_class => _class).join(' ')

/**
 * @param { ParseTestIdProps } config Configuration object
 * @param { string } config.tag Required. Component tag used between to build the final testId string.
 * @param { string } config.parsedClasses Required. A single string of previously parsed classes what will be joined with `tag` property.
 * @param { { usedRegExp?: RegExp, regExpReplacer?: string }[] } config.rules Optional. An array of objects used with a regular expression to check each case and a replacer for each one, giving oportunity to handle specific cases of component class names.
 * @returns A single string product of merge all classNames, separated by `separator` value
 */
export const parseTestId = (config: ParseTestIdProps): string => {
  let fixedClassString = config.parsedClasses

  if (config.rules) {
    for (const rule of config.rules) {
      fixedClassString = fixedClassString.replace(
        rule.usedRegExp as RegExp,
        rule.regExpReplacer as string
      )
    }
  } else {
    fixedClassString = config.parsedClasses
      .replace(`${config.tag}`, '')
      .replace(/is-/gm, '-')
  }

  return `test-${config.tag}${fixedClassString.replace(
    / /gm,
    config.separator ?? ''
  )}`
}
