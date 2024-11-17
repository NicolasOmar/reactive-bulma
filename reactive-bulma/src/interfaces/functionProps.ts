import { GenericObjectProps } from './commonProps'

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

export interface CreateObjArrayProps {
  numberOfItems?: number
  externalParser?: (i: number) => GenericObjectProps
}
