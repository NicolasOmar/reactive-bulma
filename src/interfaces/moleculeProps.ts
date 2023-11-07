// COMMON PROPS
import { ComposedElementProps, ElementProps } from './commonProps'
// COMPONENT PROPS
import {
  BreadcrumbItemProps,
  ButtonProps,
  ColumnProps,
  DeleteProps,
  DropdownItemProps
} from './atomProps'
// TYPES & INTERFACES
import {
  basicColorType,
  basicSizeType,
  breadcrumbAlignType,
  breadcrumbSeparatorType,
  columnGapType
} from '../types/styleTypes'

export interface ButtonGroupProps extends ElementProps {
  /** `Atribute` `Required` Array of `Button` objects that will be shown */
  buttonList: ButtonProps[]
  /** `Styling` Will group the list of buttonList in a single line */
  isAttached?: boolean
  /** `Styling` Sets group position on the container */
  position?: 'left' | 'centered' | 'right'
}

export interface ColumnGroupProps extends ElementProps {
  /** `Atribute` `Required` Array of `Column` objects that will be shown */
  listOfColumns: ColumnProps[]
  /** `Styling` Will adjust column structure display layout in case you want to work on mobiles */
  isMobileLayout?: boolean
  /** `Styling` Will reorder column display in multiple lines each time exceeds viewport width */
  isMultiline?: boolean
  /** `Styling` Will center the list of columns vertically */
  isVerticallyCentered?: boolean
  /** `Styling` Will center the list of columns horizontally */
  isHorizontallyCentered?: boolean
  /** `Styling` Will adjust the space between the columns. In case to set null, it will remove those gaps */
  gap?: columnGapType | null
}

export interface NotificationProps extends ElementProps {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the column */
  children?: string | React.ReactElement | React.ReactElement[]
  /** `Atribute` Includes a `Delete` config object that will be shown */
  deleteButton?: DeleteProps
  /** `Styling` Color based on bulma's color tokens */
  color?: basicColorType
  /** `Styling` Will adjust the selected color with a ligther style */
  isLightColor?: boolean
}

export interface BreadcrumbsProps extends ComposedElementProps {
  /** `Atribute` `Required` Array of `BreadcrumbItems` objects that will be shown */
  items: BreadcrumbItemProps[]
  /** `Styling` Will adjust element position on screen */
  alignment?: breadcrumbAlignType | null
  /** `Styling` Will adjust element position on screen */
  separator?: breadcrumbSeparatorType | null
  /** `Styling` Set button's size on bulma's size tokens */
  size?: Exclude<basicSizeType, 'is-normal'>
}

export interface DropdownProps extends ElementProps {
  /** `Atribute` `Required` Sets the name will be shown on the dropdown input */
  inputText: string
  /** `Attribute` Sets a relationship between dropdown trigger's button and dropdown's menu to toggle display */
  dropdownPointer?: string
  /** `Atribute` `Required` Array of `DropdownItem` objects that will be shown on its menu */
  listOfItems: DropdownItemProps[]
}

export interface MessageProps extends ElementProps {
  /** `Atribute` Sets the header's text that will be shown on message's darker zone */
  headerText?: string
  /** `Atribute` `Required` Sets the body's text that will be shown on message's lighter zone */
  bodyText: string
  /** `Styling` Color based on bulma's color tokens */
  color?: basicColorType
  /** `Styling` Set button's size on bulma's size tokens */
  size?: Exclude<basicSizeType, 'is-normal'>
  onDeleteClick?: () => void
}
