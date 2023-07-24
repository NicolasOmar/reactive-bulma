interface RegExpRule {
  regExp?: RegExp
  replacer?: string
}

export interface ParseTestIdProps {
  tag: string
  parsedClasses: string
  rules?: RegExpRule[]
  separator?: string
}
