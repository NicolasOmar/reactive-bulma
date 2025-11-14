import React from 'react'
// COMMON PROPS
import {
  ElementProps,
  ComposedElementProps,
  ClickeableProps,
  NamedInputProps,
  InteractiveProps,
  InteractiveOnChangeProps,
  ColoredProps
} from './commonProps'
// TYPES & INTERFACES
import {
  BasicColorType,
  ColumnOffsetType,
  ColumnSizeType,
  FixedImageSizeType,
  IconColorModeType,
  ElementSizeType,
  SizeWithoutNormalType,
  TextColorType,
  TitleSizeType,
  RightLeftAlignType,
  CommonSizeType,
  ColorVersionType
} from '../types/styleTypes'
import {
  DropdownItemType,
  InputType,
  ChildrenType,
  TileContextType,
  SingleChildType
} from '../types/domTypes'

export interface ColumnProps
  extends ElementProps,
    React.ComponentPropsWithoutRef<'section'> {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the column */
  children?: ChildrenType
  /** `Styling` Set column's size */
  size?: ColumnSizeType
  /** `Styling` Set column's offset (moving it as you set its size */
  offset?: ColumnOffsetType
  /** `Styling` Set if the column only will take the space it needs */
  isNarrow?: boolean
}

export interface ButtonProps
  extends ElementProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** `Attribute` The component will be rendered as an anchor instead a button */
  isAnAnchor?: boolean
  /** `Attribute` In case the component has `isAnAnchor` as `true`, it will include an url to be reffered */
  anchorHref?: string
  /** `Attribute` The text will be shown in the `Button` */
  text?: string
  /** `Attribute` Will disable the button */
  isDisabled?: boolean
  /** `Styling` Color based on bulma's color tokens */
  color?: BasicColorType
  /** `Styling` Will adjust the selected color with a ligther or darker style */
  colorVersion?: ColorVersionType
  /** `Styling` Will invert button's colors (typography in color and background in white or black) */
  isInvertedColor?: boolean
  /** `Styling` Similar to `isInvertedColor`, but button's border will be colored */
  isOutlined?: boolean
  /** `Styling` Will add round borders to button's shape */
  isRounded?: boolean
  /** `Styling` Will change `text` for an animated spinner, but will remain clickeable */
  isLoading?: boolean
  /** `Styling` Similar to `isDisabled`, but will remove any color style */
  isStatic?: boolean
  /** `Styling` Sets the button style when a User selects it (useful for an attached `ButtonGroup`) */
  isSelected?: boolean
  /** `Styling` Will adjust button's width to its container fullest */
  isFullWidth?: boolean
  /** `Styling` Will adjust button's size for a responsive design, adjustable to its size */
  isResponsive?: boolean
  /** `Styling` Set button's size on bulma's size tokens */
  size?: ElementSizeType
  /** `Function` Click function, alone does not nothing, but can be reused for other components */
  onClick?: () => void
}

export interface ProgressBarProps
  extends ElementProps,
    React.ComponentPropsWithoutRef<'progress'> {
  /** `Attribute` Sets colored bar at the level against `max` value (`100` by default) */
  value?: number
  /** `Attribute` Sets the entire bar length comparing with current `value` */
  max?: number
  /** `Styling` Color based on bulma's color tokens */
  color?: BasicColorType
  /** `Styling` Set progress bar's size */
  size?: ElementSizeType
  /** `Styling` Will change `value` for an animated loading */
  isLoading?: boolean
}

export interface BlockProps
  extends ElementProps,
    React.ComponentPropsWithoutRef<'section'> {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the block */
  children?: ChildrenType
}

export interface TagProps
  extends ComposedElementProps,
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
  color?: BasicColorType
  /** `Styling` Will adjust the selected color with a ligther style */
  isLight?: boolean
  /** `Styling` Will add round borders to tag's shape */
  isRounded?: boolean
  /** `Styling` Set tag's size */
  size?: SizeWithoutNormalType
  /** `Styling` Color on tag's addon based on bulma's color tokens */
  addonColor?: BasicColorType
  /** `Function` Click function for `delete` option, alone does not nothing, but can be reused for other components */
  onDeleteClick?: () => void
}

export interface ImageProps
  extends ComposedElementProps,
    React.ComponentPropsWithoutRef<'figure'> {
  /** `Attribute` `Required` The image source that will be shown */
  src: string
  /** `Attribute` A description text for the image, useful for accessibility purposes */
  alt?: string
  /** `Styling` Will add round borders to image's shape */
  fixedSize?: FixedImageSizeType
  /** `Styling` Sets image size based on one of fixed ratios/fixed sizes */
  isRounded?: boolean
}

export interface BoxProps
  extends ElementProps,
    React.ComponentPropsWithoutRef<'section'> {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the box */
  children?: ChildrenType
}

export interface TitleSectionProps
  extends ElementProps,
    React.ComponentPropsWithoutRef<'p'> {
  /** `Attribute` Sets the text you want to show */
  text: string
  /** `Styling` Set text size */
  size?: TitleSizeType
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

export interface IconProps extends ComposedElementProps {
  /** `Attribute` `Required` Sets the icon key work based on [Material Design icon list](https://pictogrammers.com/library/mdi/) */
  iconLabel: string
  /** `Attribute` Sets the text you want to show next to the icon */
  text?: string
  /** `Styling` Color based on bulma's text color tokens */
  color?: TextColorType
  /** `Styling` Set icons's size */
  size?: SizeWithoutNormalType
  /** `Styling` Special usage in case you want to set as dark or light mode */
  colorMode?: IconColorModeType
  /** `Styling` Animates the icon spinning 360° */
  isSpinning?: boolean
  /** `Styling` Used for `InputControl` styling purpose only. Will move the Icon itself to control's Input side */
  position?: RightLeftAlignType
}

export interface InputProps
  extends ElementProps,
    InteractiveProps,
    NamedInputProps {
  /** `Attribute` `Required` What type of input will be used */
  type: InputType
  /** `Attribute` The value that will be shown on the input */
  value?: string
  /** `Attribute` The text that will be shown if the user does not type any value */
  placeholder?: string
  /** `Attribute` Will disable the input */
  isDisabled?: boolean
  /** `Attribute` Will show the input as a normal one, but is not editable and has no shadow */
  isReadonly?: boolean
  /** `Styling` Color based on bulma's text color tokens */
  color?: BasicColorType
  /** `Styling` Set input's size */
  size?: SizeWithoutNormalType
  /** `Styling` Will add round borders to input's shape */
  isRounded?: boolean
  /** `Styling` Will add a specific border when the input is hovered by the user */
  isHovered?: boolean
  /** `Styling` Will add a specific border when the input is focused by the user */
  isFocused?: boolean
}

export interface TextAreaProps extends Omit<InputProps, 'isRounded' | 'type'> {
  /** `Attribute` Text area's columns value that sets its width */
  cols?: number
  /** `Attribute` Text area's rows value that sets its height */
  rows?: number
  /** `Styling` Will disable characteristic sizable property by removing its control on bottom-right corner */
  isFixedSize?: boolean
}

export interface DeleteProps extends ElementProps, ClickeableProps {
  /** `Styling` Set icons's size */
  size?: SizeWithoutNormalType
}

export interface SelectOption {
  id: string | number
  name: string
}

export interface SelectProps
  extends ComposedElementProps,
    InteractiveOnChangeProps,
    NamedInputProps {
  /** `Attribute` Will disable the input */
  isDisabled?: boolean
  /** `Attribute` Indicates the select contained on the select */
  options?: SelectOption[]
  /** `Attribute` Will select a different default option if the user provides it. It can be an multiple selection if `isMultiple` is true */
  selectedValues?: string | string[]
  /** `Attribute` Indicates how many options will be shown at first glance (before looking for the whole list */
  showOptions?: number
  /** `Attribute` Will allow multiple selection */
  isMultiple?: boolean
  /** `Styling` Color based on bulma's color tokens */
  color?: BasicColorType
  /** `Styling` Set select's size */
  size?: ElementSizeType
  /** `Styling`Will add round borders to input's shape */
  isRounded?: boolean
  /** `Styling`Will add a specific border when the input is hovered by the user */
  isHovered?: boolean
  /** `Styling`Will add a specific border when the input is focused by the user */
  isFocused?: boolean
}

export interface FileProps
  extends ComposedElementProps,
    InteractiveProps,
    NamedInputProps {
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
  color?: BasicColorType
  /** `Styling` Set button's size */
  size?: ElementSizeType
}

export interface CheckBoxProps
  extends ComposedElementProps,
    InteractiveOnChangeProps,
    NamedInputProps {
  /** `Attribute` Shows the checkbox as checked or unchecked */
  isChecked?: boolean
  /** `Attribute` Sets checkbox's text that will be shown next to its control */
  label?: string
  /** `Attribute` Will disable the checkbox */
  isDisabled?: boolean
}

export interface RadioButtonItemProps
  extends Pick<ElementProps, 'testId' | 'style'>,
    InteractiveOnChangeProps,
    NamedInputProps {
  /** `Attribute` `Required` Sets radiobutton's text*/
  label: string
  /** `Attribute` Shows the radiobutton as checked or unchecked */
  isChecked?: boolean
  /** `Attribute` Will disable the checkbox */
  isDisabled?: boolean
}

export interface RadioButtonProps
  extends ComposedElementProps,
    InteractiveOnChangeProps {
  /** `Attribute` `Required` Indicates the options contained to be selected */
  options: RadioButtonItemProps[]
  /** `Attribute` `Required` Sets the name that will relate this checkbox with the others */
  name: string
}

export interface BreadcrumbItemProps
  extends ComposedElementProps,
    ClickeableProps {
  /** `Attribute` `Required` Indicates item text that will be shown */
  text: string
  /** `Attribute` Adds an `Icon` component before the text */
  icon?: IconProps
  /** `Styling` Marks the item as the one where user is located (based on breadcrumb hierarchy) */
  isActiveItem?: boolean
}

export interface DropdownTriggerProps
  extends ComposedElementProps,
    ClickeableProps {
  /** `Attribute` `Required` Sets the name will be shown on the dropdown input */
  menuText: string
  /** `Attribute` Sets a relationship between trigger's button and dropdown's menu to toggle display */
  dropdownPointer?: string
}

export interface DropdownItemProps extends ElementProps, ClickeableProps {
  /** `Attribute` `Required` Sets the name will be shown on the item */
  itemText: string
  /** `Attribute` Changes item's composition into a `<hr>`, a `<a>` or a `<div>` depending its type */
  type?: DropdownItemType
  /** `Styling` Marks the item as the one where user is located (based on dropdown hierarchy) */
  isActiveItem?: boolean
}

export interface MenuItemProps extends ElementProps, ClickeableProps {
  /** `Attribute` `Required` Sets the text will be shown on the menu item */
  text: string
  /** `Styling` Generates a blue background to mark the item as the active one in the `MenuList` */
  isActive?: boolean
}

export interface PaginationItemProps extends ElementProps, ClickeableProps {
  /** `Attribute` `Required` Sets the number string that will be shown in the item and in its title when user hovers it */
  text: string | number
  /** `Attribute` Sets a custom text before the `text` when user hovers the item */
  labelText?: string
  /** `Attribute` Sets a custom text before the `text` when user hovers the item if is the current one */
  currentLabelText?: string
  /** `Styling` Makes the item the selected one, changing its background to blue */
  isSelected?: boolean
}

export interface TabItemProps extends ComposedElementProps, ClickeableProps {
  /** `Attribute` `Required` The text will be shown in the `TabItem` */
  text: string
  /** `Attribute` Adds an `Icon` component before the text */
  icon?: IconProps
  /** `Styling` Used for `Tabs` styling purpose only. Will mark the tab as the one selected among its group */
  isActive?: boolean
}

export interface LevelHeaderProps extends ElementProps {
  /** `Attribute` `Required` A title in smaller size */
  header: string
  /** `Attribute` `Required` Main value (numeric or text) to be shown in a bigger scale below `header` */
  value: string | number
}

export interface TileProps extends ElementProps {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the tile */
  children?: ChildrenType
  /** `Attribute` Indicates its hierarchy level based on [Bulma documantation](https://bulma.io/documentation/layout/tiles/#nesting-requirements). Selection any level besides `is-child` will invalidate any `color` you select */
  context?: TileContextType
  /** `Styling` Set tile's size */
  size?: CommonSizeType
  /** `Styling` Color based on bulma's color tokens */
  color?: BasicColorType
  /** `Styling` Used for hierarchy level as ancestor or parent. It selects its children in a vertical format (like a column) */
  isVertical?: boolean
}

export interface NavBarItemProps extends ElementProps, ClickeableProps {
  /** `Attribute` `Required` Reffers to the component or string that will be shown inside the item */
  children: SingleChildType
  /** `Styling` Used for `NavBarDropdown` styling purpose only. Will mark the item as the one selected among its group */
  isActive?: boolean
}

export interface TableHeadCellProps
  extends ElementProps,
    ColoredProps,
    ClickeableProps {
  /** `Attribute` `Required` It will display cell's content, which could be text, an html tag or a custom component */
  content: SingleChildType
}

export interface TableCellProps
  extends ElementProps,
    ColoredProps,
    ClickeableProps {
  /** `Attribute` `Required` It will display cell's content, which could be text, an html tag or a custom component */
  content: SingleChildType
}
