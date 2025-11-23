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

/** Reffers to the component or string that will be shown inside the item */
export type SingleChildType = Exclude<ChildrenType, React.ReactElement[]>

export enum IconSizeEnum {
  'small' = 24,
  'medium' = 36,
  'large' = 48
}

export type TileContextType = 'is-child' | 'is-parent' | 'is-ancestor'

export type HeroContentType = 'head' | 'body' | 'foot'

export type MediaSectionType = 'left' | 'content' | 'right'

export type NavBarFixedPositionType = 'top' | 'bottom'
