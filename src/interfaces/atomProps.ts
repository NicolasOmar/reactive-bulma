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
  /** *For container case*. ID used to locate the element in unit test suites (like Jest) */
  containerTestId?: string
  /** *For container case*. Custom styling applicable for specific scenarios */
  containerStyle?: React.CSSProperties
  /** *For container case*. Custom CSS classes, applicable for specific scenarios */
  containerCssClasses?: string
}

export interface ColumnProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'section'> {
  /** Set column's size */
  size?: columnSizeType
  /** Set column's offset (moving it as you set its size */
  offset?: columnOffsetType
  /** Set if the column only will take the space it needs */
  isNarrow?: boolean
}

export interface ButtonProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** The text will be shown in the `Button` */
  text?: string
  /** Color based on bulma's color tokens */
  color?: basicColorType
  /** Will adjust the selected color with a ligther style */
  isLightColor?: boolean
  /** Will invert button's colors (typography in color and background in white or black) */
  isInvertedColor?: boolean
  /** Similar to `isInvertedColor`, but button's border will be colored */
  isOutlined?: boolean
  /** Will add round borders to button's shape */
  isRounded?: boolean
  /** Will change `text` for a animated spinner, but will remain clickeable */
  isLoading?: boolean
  /** Will disable the button */
  isDisabled?: boolean
  /** Similar to `isDisabled`, but will remove any color style */
  isStatic?: boolean
  /** Set button's size on bulma's size tokens */
  size?: basicSizeType
  /** Click function, alone does not nothing, but can be reused for other components */
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
  /** *Required*. The image source that will be shown */
  src: string
  /** Will add round borders to image's shape */
  fixedSize?: fixedImageSizeType
  /** Sets image size based on one of fixed ratios/fixed sizes */
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
  /** *Required*. Sets the icon key work based on [Material Design icon list](https://pictogrammers.com/library/mdi/) */
  iconLabel: string
  /** Sets the any text you want to show next to the icon */
  text?: string
  /** Color based on bulma's text color tokens */
  color?: textColorType
  /** Set icons's size */
  size?: Exclude<basicSizeType, 'is-normal'>
  /** Special usage in case you want to set as dark or light mode */
  colorMode?: iconColorModeType
  /** Animates the icon spinning 360° */
  isSpinning?: boolean
}

export interface InputProps extends BasicProps {
  /** *Required*. What type of input will be used */
  type: inputTypes
  /** The value that will be shown on the input */
  text?: string
  /** Will disable the input */
  isDisabled?: boolean
  /** Will show the input as a normal one, but is not editable and has no shadow */
  isReadonly?: boolean
  /** Color based on bulma's text color tokens */
  color?: basicColorType
  /** Set input's size */
  size?: basicSizeType
  /** Will add round borders to input's shape */
  isRounded?: boolean
  /** Will add a specific border when the input is hovered by the user */
  isHovered?: boolean
  /** Will add a specific border when the input is focused by the user */
  isFocused?: boolean
  /** Click function. Alone does not nothing, but can be reused for other components */
  onClick?: () => void
  /** Reffers to each time the user press a key. Alone does not nothing, but can be reused for other components */
  onChange?: () => void
}

export interface TextAreaProps extends Omit<InputProps, 'isRounded' | 'type'> {
  cols?: number
  rows?: number
  isFixedSize?: boolean
}

export interface DeleteProps extends BasicProps {
  /** Set icons's size */
  size?: Exclude<basicSizeType, 'is-normal'>
  /** Click function. Alone does not nothing, but can be reused for other components */
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
  /** The name of the file to be uploaded */
  fileName?: string
  /** The icon displayed in file's button" */
  uploadIcon?: IconProps
  /** The text displayed in file's button */
  uploadText?: string
  /** Changes button's position to its right */
  buttonOnRight?: boolean
  /** The whole container (button and file name) will occupy its parent container width */
  isFullWidth?: boolean
  /** Changes styling to a box style, making the button bigger and file name's position below the button */
  isBoxed?: boolean
  /** Color based on bulma's color tokens */
  color?: basicColorType
  /** Set button's size */
  size?: basicSizeType
  /** Click function, alone does not nothing, but can be reused for other components */
  onClick?: () => void
}

export interface CheckBoxProps extends BasicProps {
  /** Sets checkbox's text that will be shown next to its control */
  content?: string | React.ReactElement
  /** Will disable the checkbox */
  isDisabled?: boolean
  /** Click function, alone does not nothing, but can be reused for other components */
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
