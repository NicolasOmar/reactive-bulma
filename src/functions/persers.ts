import { ParseTestIdProps } from '../interfaces/functionProps'

export const parseClasses = (_classes: Array<string | null>): string =>
  _classes.filter(_class => _class).join(' ')

export const parseTestId = (config: ParseTestIdProps): string =>
  `test-${config.tag}${config.parsedClasses
    .replace(`${config.tag}`, '')
    .replace(/is-/gm, '-')
    .replace(/ /gm, config.separator || '')}`
