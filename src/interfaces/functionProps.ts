interface RegExpRule {
  usedRegExp?: RegExp
  regExpReplacer?: string
}

export interface ParseTestIdProps {
  tag: string
  parsedClasses: string
  rules?: RegExpRule[]
  separator?: string
}
