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
 * @param { string } config.separator Optional. `''` by default. Will replace final string empty spaces with a configurable string.
 * @returns A single string product of merge all classNames, separated by `separator` value
 */
export const parseTestId = (config: ParseTestIdProps): string =>
  `test-${config.tag}${config.parsedClasses
    .replace(`${config.tag}`, '')
    .replace(/is-/gm, '-')
    .replace(/ /gm, config.separator || '')}`
