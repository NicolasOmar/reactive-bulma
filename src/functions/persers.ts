export const parseClasses = (_classes: Array<string | null>): string =>
  _classes.filter(_class => _class).join(' ')

export const parseTestId = (tag: string, parsedClasses: string): string =>
  `test-${tag}${parsedClasses.replace(/is-/gm, '-').replace(/ /gm, '')}`
