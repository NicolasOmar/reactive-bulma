import React from 'react'
// TYPES
import {
  basicColorType,
  columnOffsetType,
  columnSizeType,
  fixedImageSizeType,
  sizeType
} from '../types/styleTypes'

interface BasicProps {
  testId?: string
  style?: React.CSSProperties
}

export interface ColumnProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'section'> {
  size?: columnSizeType
  offset?: columnOffsetType
  isNarrow?: boolean
}

export interface ButtonProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'button'> {
  text?: string
  style?: React.CSSProperties
  color?: basicColorType
  isLightColor?: boolean
  isInvertedColor?: boolean
  isOutlined?: boolean
  isRounded?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  isStatic?: boolean
  size?: sizeType
  onClick?: () => void
}

export interface ProgressBarProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'progress'> {
  value?: number
  max?: number
  style?: React.CSSProperties
  color?: basicColorType
  size?: sizeType
  isLoading?: boolean
}

export interface BlockProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'section'> {
  testId?: string
}

export interface TagProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'span'> {
  text: string
  color?: basicColorType
  isLight?: boolean
  isRounded?: boolean
  size?: Exclude<sizeType, 'is-normal'>
  withDelete?: boolean
  withAddon?: boolean
  addonText?: string
  addonColor?: basicColorType
  onDeleteClick?: () => void
}

export interface ImageProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'figure'> {
  src: string
  fixedSize?: fixedImageSizeType
  isRounded?: boolean
}

export interface BoxProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'section'> {}
