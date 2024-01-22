import React from 'react'

export enum IconSizeEnum {
  'is-small' = 24,
  'is-medium' = 36,
  'is-large' = 48
}

export type ChildrenType = string | React.ReactElement | React.ReactElement[]

export type SingleChildType = Exclude<ChildrenType, React.ReactElement[]>
