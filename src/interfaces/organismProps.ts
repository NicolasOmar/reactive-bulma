// COMMON PROPS
import { ClickeableProps, ElementProps } from './commonProps'
// COMPONENT PROPS
import {
  InputControlProps,
  LevelItemProps,
  NavBarBrandProps,
  NavBarDropdownProps,
  PanelBlockProps,
  PanelTabsProps,
  TableRowProps
} from './moleculeProps'
import {
  ImageProps,
  NavBarItemProps,
  TableHeadCellProps,
  TileProps
} from './atomProps'
// TYPES & INTERFACES
import { BasicColorType, SizeWithHeightType } from '../types/styleTypes'
import { ChildrenType, NavBarFixedPositionType } from '../types/domTypes'

export interface FormFieldHelperProps {
  text?: string
  color?: BasicColorType
}

export interface FormFieldProps extends ElementProps {
  /** `Attribute` `Required` Single or multiple `InputControlProps` config objects which will be wrapped around the `FormField` */
  inputControlConfig: InputControlProps | InputControlProps[]
  /** `Attribute` Sets a custom text before the wrapped input to indicate its usage */
  labelText?: string
  /** `Attribute` Adds a helper text below the wrapped paragraph to provide context information */
  helperConfig?: FormFieldHelperProps
  /** `Styling` Will adjust field's sections (label, input/s and helper) in horizontal position */
  isHorizontal?: boolean
  /** `Styling` Will group the list of inputs in a same wrapper (useful for several inputs with same usage, as a complex address) */
  isGrouped?: boolean
}

export interface PanelProps extends ElementProps {
  /** `Attribute` `Required` Will display Panel's header text */
  headerText: string
  /** `Attribute` A configuration object that will render a set of tabs based on `PanelTab` component */
  panelTabs?: PanelTabsProps
  /** `Attribute` `Required` A list of configuration objects that will render a list of block with different components, based on `PanelBlockList` component */
  blockList: PanelBlockProps[]
  /** `Styling` Color based on bulma's text color tokens */
  color?: BasicColorType
}

export interface LevelProps extends ElementProps {
  /** `Attribute` A list of `LevelItem` configurations that will br displayed in Level's left side */
  leftSide?: LevelItemProps[]
  /** `Attribute` A list of `LevelItem` configurations that will br displayed in Level's center */
  centerSide?: LevelItemProps[]
  /** `Attribute` A list of `LevelItem` configurations that will br displayed in Level's right side */
  rightSide?: LevelItemProps[]
  /** `Styling` Will adjust the navigator on horizontal on mobile as well */
  isMobile?: boolean
}

export interface HeroProps extends ElementProps {
  /** `Attribute` Designated section for hero's header, it will be visible only if container's `size` is setted to `is-fullheight` */
  header?: ChildrenType
  /** `Attribute` `Required` Designated section for hero's body */
  body: ChildrenType
  /** `Attribute` Designated section for hero's footer, it will be visible only if container's `size` is setted to `is-fullheight` */
  footer?: ChildrenType
  /** `Styling` Set hero's size */
  size?: SizeWithHeightType
  /** `Styling` Color based on bulma's text color tokens */
  color?: BasicColorType
}

export interface TileGroupProps
  extends ElementProps,
    Pick<TileProps, 'context' | 'isVertical' | 'size'> {
  /** `Attribute` `Required` A list of `Title` configurations that will be displayed in a grid mode on the screen */
  groupConfig: TileProps[]
}

export interface NavBarMenuProps {
  itemList: Array<NavBarItemProps | NavBarDropdownProps>
  showInMobile?: boolean
}

export interface NavBarProps extends ElementProps {
  /** `Attribute` Configuration object for navbar's left section, it needs of a `NavBarBrand` object to be displayed at NavBar's start */
  brandConfig?: NavBarBrandProps
  /** `Attribute` Configuration object for navbar's left section, it needs of a list of `NavBarItem` or `NavBarDropdown` objects to be displayed */
  itemsAtStart?: NavBarMenuProps
  /** `Attribute` Configuration object for navbar's right section, it needs of a list of `NavBarItem` or `NavBarDropdown` objects to be displayed */
  itemsAtEnd?: NavBarMenuProps
  /** `Styling` Sets navbar's position at screen's top or bottom */
  fixedPosition?: NavBarFixedPositionType
  /** `Styling` Color based on bulma's text color tokens */
  color?: BasicColorType
  /** `Styling` Sets navbar's color as transparent */
  isTransparent?: boolean
  /** `Styling` Adds a small padding around the navbar */
  isSpaced?: boolean
  /** `Styling` Adds a small shadow on navbar's bottom */
  hasShadow?: boolean
}

export interface CardFooterProps extends ClickeableProps {
  text: string
}

export interface CardProps extends ElementProps {
  /** `Attribute` It will shot a text on card's top, just a paragraph */
  headerText?: string
  /** `Attribute` A single configuration object that will render an `Image` component */
  image?: ImageProps
  /** `Attribute` `Required` Deisgnated section where you can include a string, a single or list of components (each one separated in its own `content` section) */
  content: ChildrenType
  /** `Attribute` A list of footer links that will be rendered on card's bottom, below its content */
  footerLinks?: CardFooterProps[]
}

export interface TableProps extends ElementProps {
  /** `Attribute` `Required` Configuration object that will display table's head */
  head: TableHeadCellProps[]
  /** `Attribute` `Required` Configuration object that will display table's body */
  body: TableRowProps[]
  /** `Attribute` Configuration object that will display table's foot */
  foot?: TableHeadCellProps[]
  /** `Styling` It will add a Bordered styling to the table. It can be combined with other mentioned styling properties. */
  isBordered?: boolean
  /** `Styling` It will add a Striped styling to the table. It can be combined with other mentioned styling properties. */
  isStriped?: boolean
  /** `Styling` It will add a Narrow styling to the table. It can be combined with other mentioned styling properties. */
  isNarrow?: boolean
  /** `Styling` It will add a Hoverable styling to the table. It can be combined with other mentioned styling properties. */
  isHoverable?: boolean
  /** `Styling` It will add a Fullwidth styling to the table. It can be combined with other mentioned styling properties. */
  isFullwidth?: boolean
  /** `Styling` Will create a container around the table in order to make it scrollable */
  isContained?: boolean
}
