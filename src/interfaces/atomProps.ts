import React from 'react'
// TYPES
import {
  basicColorType,
  columnOffsetType,
  columnSizeType,
  fixedImageSizeType,
  iconColorModeType,
  basicSizeType,
  textColorType,
  titleSizeType
} from '../types/styleTypes'
import { inputTypes } from '../types/domTypes'

interface BasicProps {
  /** ID used to locate the element in unit test suites (like Jest) */
  testId?: string
  /** Custom styling applicable for specific scenarios */
  style?: React.CSSProperties
  /** Custom CSS classes, applicable for specific scenarios */
  cssClasses?: string
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
  size?: basicSizeType
  onClick?: () => void
}

export interface ProgressBarProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'progress'> {
  value?: number
  max?: number
  style?: React.CSSProperties
  color?: basicColorType
  size?: basicSizeType
  isLoading?: boolean
}

export interface BlockProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'section'> {
  /** Reffers to the component or array of components that will be shown inside the block */
  children?: string | React.ReactElement | React.ReactElement[]
}

export interface TagProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'span'> {
  text: string
  color?: basicColorType
  isLight?: boolean
  isRounded?: boolean
  size?: Exclude<basicSizeType, 'is-normal'>
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
    React.ComponentPropsWithoutRef<'section'> {
  /** Reffers to the component or array of components that will be shown inside the box */
  children?: string | React.ReactElement | React.ReactElement[]
}

export interface TitleSectionProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'p'> {
  text: string
  size?: titleSizeType
  prop: 'title' | 'subtitle'
  isSpaced?: boolean
}

export interface TitleProps {
  main?: TitleSectionProps
  secondary?: TitleSectionProps
}

export interface IconProps extends BasicProps {
  iconLabel: string
  text?: string
  color?: textColorType
  size?: Exclude<basicSizeType, 'is-normal'>
  colorMode?: iconColorModeType
  isSpinning?: boolean
}

export interface InputProps extends BasicProps {
  type: inputTypes
  text?: string
  isDisabled?: boolean
  isReadonly?: boolean
  color?: basicColorType
  size?: basicSizeType
  isRounded?: boolean
  isHovered?: boolean
  isFocused?: boolean
  onClick?: () => void
  onChange?: () => void
}

export interface TextAreaProps extends Omit<InputProps, 'isRounded' | 'type'> {
  cols?: number
  rows?: number
  isFixedSize?: boolean
}

export interface DeleteProps extends BasicProps {
  size?: Exclude<basicSizeType, 'is-normal'>
  onClick?: () => void
}

export interface SelectOption {
  id: string | number
  name: string
  selected?: boolean
}

export interface SelectProps extends BasicProps {
  options?: SelectOption[]
  showOptions?: number
  isMultiple?: boolean
  color?: basicColorType
  size?: basicSizeType
  isRounded?: boolean
  isHovered?: boolean
  isFocused?: boolean
  onClick?: () => void
}

export interface FileProps extends BasicProps {
  fileName?: string
  uploadIcon?: IconProps
  uploadText?: string
  buttonOnRight?: boolean
  isFullWidth?: boolean
  isBoxed?: boolean
  color?: basicColorType
  size?: basicSizeType
  onClick?: () => void
}

export interface CheckBoxProps extends BasicProps {
  content?: string | React.ReactElement
  isDisabled?: boolean
  onChange?: () => void
}

interface RadioButtonItemProps {
  label: string
  name: string
  isChecked?: boolean
  isDisabled?: boolean
}

export interface RadioButtonProps extends BasicProps {
  options: RadioButtonItemProps[]
  onChange?: () => void
}
