// TYPES
import React from 'react'
import {
  basicColorType,
  columnOffsetType,
  columnSizeType,
  sizeType
} from '../types/styleTypes'

interface BasicProps {
  style?: React.CSSProperties
}

export interface ColumnProps extends React.ComponentPropsWithoutRef<'section'> {
  size?: columnSizeType
  offset?: columnOffsetType
  isNarrow?: boolean
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
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
  extends React.ComponentPropsWithoutRef<'progress'> {
  value?: number
  max?: number
  style?: React.CSSProperties
  color?: basicColorType
  size?: sizeType
  isLoading?: boolean
}

export interface BlockProps extends React.ComponentPropsWithoutRef<'section'> {
  testId?: string
}

export interface TagProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'span'> {
  text: string
  color?: basicColorType
  size?: Exclude<sizeType, 'is-normal'>
}
