import React from 'react'

export type ButtonType = 'submit' | 'reset' | 'button'

export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'tel'
  | 'number'
  | 'date'

export type DropdownItemType = 'item' | 'link' | 'divider'

export type PanelBlockItemType = 'icon' | 'control' | 'button'

export type ChildrenType = string | React.ReactElement | React.ReactElement[]

export type SingleChildType = Exclude<ChildrenType, React.ReactElement[]>

export enum IconSizeEnum {
  'is-small' = 24,
  'is-medium' = 36,
  'is-large' = 48
}

export type TileContextType = 'is-child' | 'is-parent' | 'is-ancestor'

export type HeroContentType = 'head' | 'body' | 'foot'

export type MediaSectionType = 'left' | 'content' | 'right'

export type NavBarFixedPositionType = 'top' | 'bottom'
