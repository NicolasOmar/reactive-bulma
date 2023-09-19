import React from 'react'
// TYPES
import { BasicProps } from './commonProps'
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

export interface ColumnProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'section'> {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the column */
  children?: string | React.ReactElement | React.ReactElement[]
  /** `Styling` Set column's size */
  size?: columnSizeType
  /** `Styling` Set column's offset (moving it as you set its size */
  offset?: columnOffsetType
  /** `Styling` Set if the column only will take the space it needs */
  isNarrow?: boolean
}

export interface ButtonProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** `Attribute` The text will be shown in the `Button` */
  text?: string
  /** `Attribute` Will disable the button */
  isDisabled?: boolean
  /** `Styling` Color based on bulma's color tokens */
  color?: basicColorType
  /** `Styling` Will adjust the selected color with a ligther style */
  isLightColor?: boolean
  /** `Styling` Will invert button's colors (typography in color and background in white or black) */
  isInvertedColor?: boolean
  /** `Styling` Similar to `isInvertedColor`, but button's border will be colored */
  isOutlined?: boolean
  /** `Styling` Will add round borders to button's shape */
  isRounded?: boolean
  /** `Styling` Will change `text` for a animated spinner, but will remain clickeable */
  isLoading?: boolean
  /** `Styling` Similar to `isDisabled`, but will remove any color style */
  isStatic?: boolean
  /** `Styling` Sets the button style when a User selects it (useful for an attached `ButtonGroup`) */
  isSelected?: boolean
  /** `Styling` Set button's size on bulma's size tokens */
  size?: basicSizeType
  /** `Function` Click function, alone does not nothing, but can be reused for other components */
  onClick?: () => void
}

export interface ProgressBarProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'progress'> {
  /** `Attribute` Sets colored bar at the level against `max` value (`100` by default) */
  value?: number
  /** `Attribute` Sets the entire bar length comparing with current `value` */
  max?: number
  /** `Styling` Color based on bulma's color tokens */
  color?: basicColorType
  /** `Styling` Set progress bar's size */
  size?: basicSizeType
  /** `Styling` Will change `value` for a animated loading */
  isLoading?: boolean
}

export interface BlockProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'section'> {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the block */
  children?: string | React.ReactElement | React.ReactElement[]
}

export interface TagProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'span'> {
  /** `Attribute` `Required` The text will be shown in the `Tag` */
  text: string
  /** `Attribute` Will add a delete button (for both single or addon cases) */
  withDelete?: boolean
  /** `Attribute` Will add a second tag element (that could have its own text, color and delete) */
  withAddon?: boolean
  /** `Attribute` The text will be shown in the tag's addon */
  addonText?: string
  /** `Styling` Color based on bulma's color tokens */
  color?: basicColorType
  /** `Styling` Will adjust the selected color with a ligther style */
  isLight?: boolean
  /** `Styling` Will add round borders to tag's shape */
  isRounded?: boolean
  /** `Styling` Set tag's size */
  size?: Exclude<basicSizeType, 'is-normal'>
  /** `Styling` Color on tag's addon based on bulma's color tokens */
  addonColor?: basicColorType
  /** `Function` Click function for `delete` option, alone does not nothing, but can be reused for other components */
  onDeleteClick?: () => void
}

export interface ImageProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'figure'> {
  /** `Attribute` `Required` The image source that will be shown */
  src: string
  /** `Styling` Will add round borders to image's shape */
  fixedSize?: fixedImageSizeType
  /** `Styling` Sets image size based on one of fixed ratios/fixed sizes */
  isRounded?: boolean
}

export interface BoxProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'section'> {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the box */
  children?: string | React.ReactElement | React.ReactElement[]
}

export interface TitleSectionProps
  extends BasicProps,
    React.ComponentPropsWithoutRef<'p'> {
  /** `Attribute` Sets the text you want to show */
  text: string
  /** `Styling` Set text size */
  size?: titleSizeType
  /** `Styling` Set type of title (`title` at top, `subtitle` at below) */
  type: 'title' | 'subtitle'
  /** `Styling` Set text spacing at default or maximun length */
  isSpaced?: boolean
}

export interface TitleProps {
  /** `Attribute` Main title configuration object */
  main?: TitleSectionProps
  /** `Attribute` Subtitle title configuration object */
  secondary?: TitleSectionProps
}

export interface IconProps extends BasicProps {
  /** `Attribute` `Required` Sets the icon key work based on [Material Design icon list](https://pictogrammers.com/library/mdi/) */
  iconLabel: string
  /** `Attribute` Sets the text you want to show next to the icon */
  text?: string
  /** `Styling` Color based on bulma's text color tokens */
  color?: textColorType
  /** `Styling` Set icons's size */
  size?: Exclude<basicSizeType, 'is-normal'>
  /** `Styling` Special usage in case you want to set as dark or light mode */
  colorMode?: iconColorModeType
  /** `Styling` Animates the icon spinning 360° */
  isSpinning?: boolean
}

export interface InputProps extends BasicProps {
  /** `Attribute` `Required` What type of input will be used */
  type: inputTypes
  /** `Attribute` The value that will be shown on the input */
  text?: string
  /** `Attribute` Will disable the input */
  isDisabled?: boolean
  /** `Attribute` Will show the input as a normal one, but is not editable and has no shadow */
  isReadonly?: boolean
  /** `Styling` Color based on bulma's text color tokens */
  color?: basicColorType
  /** `Styling` Set input's size */
  size?: basicSizeType
  /** `Styling` Will add round borders to input's shape */
  isRounded?: boolean
  /** `Styling` Will add a specific border when the input is hovered by the user */
  isHovered?: boolean
  /** `Styling` Will add a specific border when the input is focused by the user */
  isFocused?: boolean
  /** `Function` Click function. Alone does not nothing, but can be reused for other components */
  onClick?: () => void
  /** `Function` Reffers to each time the user press a key. Alone does not nothing, but can be reused for other components */
  onChange?: () => void
}

export interface TextAreaProps extends Omit<InputProps, 'isRounded' | 'type'> {
  /** `Attribute` Text area's columns value that sets its width */
  cols?: number
  /** `Attribute` Text area's rows value that sets its height */
  rows?: number
  /** `Styling` Will disable characteristic sizable property by removing its control on bottom-right corner */
  isFixedSize?: boolean
}

export interface DeleteProps extends BasicProps {
  /** `Styling` Set icons's size */
  size?: Exclude<basicSizeType, 'is-normal'>
  /** `Function` Click function. Alone does not nothing, but can be reused for other components */
  onClick?: () => void
}

export interface SelectOption {
  id: string | number
  name: string
  selected?: boolean
}

export interface SelectProps extends BasicProps {
  /** `Attribute` Indicates the options contained on the select */
  options?: SelectOption[]
  /** `Attribute` Indicates how many options will be shown at first glance (before looking for the whole list */
  showOptions?: number
  /** `Attribute` Will allow multiple selection */
  isMultiple?: boolean
  /** `Styling` Color based on bulma's color tokens */
  color?: basicColorType
  /** `Styling` Set select's size */
  size?: basicSizeType
  /** `Styling`Will add round borders to input's shape */
  isRounded?: boolean
  /** `Styling`Will add a specific border when the input is hovered by the user */
  isHovered?: boolean
  /** `Styling`Will add a specific border when the input is focused by the user */
  isFocused?: boolean
  /** `Function` Click function. Alone does not nothing, but can be reused for other components */
  onClick?: () => void
}

export interface FileProps extends BasicProps {
  /** `Attribute` The name of the file to be uploaded */
  fileName?: string
  /** `Attribute` The icon displayed in file's button" */
  uploadIcon?: IconProps
  /** `Attribute` The text displayed in file's button */
  uploadText?: string
  /** `Styling` Changes button's position to its right */
  buttonOnRight?: boolean
  /** `Styling` The whole container (button and file name) will occupy its parent container width */
  isFullWidth?: boolean
  /** `Styling` Changes styling to a box style, making the button bigger and file name's position below the button */
  isBoxed?: boolean
  /** `Styling` Color based on bulma's color tokens */
  color?: basicColorType
  /** `Styling` Set button's size */
  size?: basicSizeType
  /** `Function` Click function, alone does not nothing, but can be reused for other components */
  onClick?: () => void
}

export interface CheckBoxProps extends BasicProps {
  /** `Attribute` Sets checkbox's text that will be shown next to its control */
  content?: string | React.ReactElement
  /** `Attribute` Will disable the checkbox */
  isDisabled?: boolean
  /** `Function` Click function, alone does not nothing, but can be reused for other components */
  onChange?: () => void
}

export interface RadioButtonItemProps
  extends Pick<BasicProps, 'testId' | 'style'> {
  /** `Attribute` `Required` Sets checkbox's text*/
  label: string
  /** `Attribute` Sets the name that will relate this checkbox with the others */
  name?: string
  /** `Attribute` Shows the checkbox as checked or unchecked */
  isChecked?: boolean
  /** `Attribute` Will disable the checkbox */
  isDisabled?: boolean
  /** `Function` Click function, alone does not nothing, but can be reused for other components */
  onChange?: () => void
}

export interface RadioButtonProps extends BasicProps {
  /** `Attribute` `Required` Indicates the options contained to be selected */
  options: RadioButtonItemProps[]
  /** `Attribute` `Required` Sets the name that will relate this checkbox with the others */
  name: string
  /** `Function` Click function, alone does not nothing, but can be reused for other components */
  onChange?: () => void
}
