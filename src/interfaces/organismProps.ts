// COMMON PROPS
import { ElementProps } from './commonProps'
// COMPONENT PROPS
import {
  InputControlProps,
  LevelItemProps,
  NavBarBrandProps,
  NavbarDropdownProps,
  PanelBlockProps,
  PanelTabsProps
} from './moleculeProps'
// TYPES & INTERFACES
import { BasicColorType, SizeWithHeightType } from '../types/styleTypes'
import { ChildrenType, NavBarFixedPositionType } from '../types/domTypes'
import { NavbarItemProps, TileProps } from './atomProps'

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
  itemList: Array<NavbarItemProps | NavbarDropdownProps>
  showInMobile?: boolean
}

export interface NavBarProps extends ElementProps {
  brandConfig?: NavBarBrandProps
  itemsAtStart?: NavBarMenuProps
  itemsAtEnd?: NavBarMenuProps
  fixedPosition?: NavBarFixedPositionType
  color?: BasicColorType
  isTransparent?: boolean
  isSpaced?: boolean
  hasShadow?: boolean
}
