export const parseClasses = (_classes: Array<string | null>): string =>
  _classes.filter(_class => _class).join(' ')
