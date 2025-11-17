// COMMON PROPS
import {
  ClickeableProps,
  ColoredProps,
  ComposedElementProps,
  ElementProps
} from './commonProps'
// COMPONENT PROPS
import {
  BreadcrumbItemProps,
  ButtonProps,
  CheckBoxProps,
  ColumnProps,
  DeleteProps,
  DropdownItemProps,
  IconProps,
  InputProps,
  MenuItemProps,
  NavBarItemProps,
  PaginationItemProps,
  RadioButtonProps,
  SelectProps,
  TabItemProps,
  TableCellProps,
  TableHeadCellProps,
  TagProps,
  TextAreaProps
} from './atomProps'
// TYPES & INTERFACES
import {
  BasicColorType,
  RightCenteredAlignType,
  BreadcrumbSeparatorType,
  ColumnGapType,
  SizeWithoutNormalType,
  TabsFormatType,
  MediumAndLargeSizeType,
  RightLeftAlignType
} from '../types/styleTypes'
import {
  ChildrenType,
  SingleChildType,
  PanelBlockItemType
} from '../types/domTypes'

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
  gap?: ColumnGapType | null
}

export interface NotificationProps extends ElementProps {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the column */
  children?: ChildrenType
  /** `Atribute` Includes a `Delete` config object that will be shown */
  deleteButton?: DeleteProps
  /** `Styling` Color based on bulma's color tokens */
  color?: BasicColorType
  /** `Styling` Will adjust the selected color with a ligther style */
  isLightColor?: boolean
}

export interface BreadcrumbsProps extends ComposedElementProps {
  /** `Atribute` `Required` Array of `BreadcrumbItems` objects that will be shown */
  items: BreadcrumbItemProps[]
  /** `Styling` Will adjust element position on screen */
  alignment?: RightCenteredAlignType | null
  /** `Styling` Will adjust element position on screen */
  separator?: BreadcrumbSeparatorType | null
  /** `Styling` Set breadcrumb's size on bulma's size tokens */
  size?: SizeWithoutNormalType
}

export interface DropdownProps extends ElementProps {
  /** `Styling` Will display dropdown content when the user hovers the mouse on the input */
  isHoverable?: boolean
  /** `Styling` Will align dropdown's content to the right */
  isRightAligned?: boolean
  /** `Styling` Will set dropdown's menu above its input */
  isContentUp?: boolean
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
  /** `Atribute` Includes a `Delete` config object that will be shown */
  deleteButton?: DeleteProps
  /** `Styling` Color based on bulma's color tokens */
  color?: BasicColorType
  /** `Styling` Set button's size on bulma's size tokens */
  size?: SizeWithoutNormalType
}

interface MenuSubListProps {
  subListTitle: MenuItemProps
  subItems: MenuItemProps[]
}

type MenuListItemType = MenuItemProps | MenuSubListProps

export interface MenuListProps extends ElementProps {
  /** `Attribute` `Required` List of menu items that can be used as single ones or in a list/sublist format */
  itemList: Array<MenuListItemType>
}

interface MenuSectionProps {
  /** `Attribute` `Required` Label that will be show at the beginning of each section */
  label: string
  /** `Attribute` `Required` List of menu items that can be used as single ones or in a list/sublist format */
  itemList: Array<MenuListItemType>
}

export interface MenuProps extends ElementProps {
  /** `Attribute` `Required` List of sections that can be single or second level MenuItems */
  menuSections: MenuSectionProps[]
}

export interface PaginationNavigationButtonProps extends ClickeableProps {
  /** `Attribute` `Required` Text that will be shown on the button */
  text: string
  /** `Attribute` Will disable the button */
  isDisabled?: boolean
  /** `Attribute` Custom CSS classes, applicable for specific scenarios */
  cssClasses?: string
}

export interface PaginationProps extends ComposedElementProps {
  /** `Attribute` `Required` List of sections that can be single or second level MenuItems */
  pages: PaginationItemProps[]
  /** `Attribute` Adds a couple of ellipsis between the first and last item */
  hasEllipsis?: boolean
  /** `Attribute` Number of items that will be hidden if `hasEllipsis` is `true` */
  ellipsisItems?: number
  /** `Attribute` Toogle `Previous` and `Next page` buttons next to the selectable pages */
  showPreviousPageButton?: PaginationNavigationButtonProps | null
  /** `Attribute` Toogle `Previous` and `Next page` buttons next to the selectable pages */
  showNextPageButton?: PaginationNavigationButtonProps | null
  /** `Styling` Will add round borders to each page's shape */
  isRounded?: boolean
  /** `Styling` Set button's size on bulma's size tokens */
  size?: SizeWithoutNormalType
  /** `Styling` Will adjust the pages position on screen */
  alignment?: RightCenteredAlignType | null
}

export interface ModalProps extends ComposedElementProps {
  /** `Attribute` Reffers to the component or array of components that will be shown inside the column */
  children?: ChildrenType | null
  /** `Function` Custom function related to the modal's close button to inject custom code if needed */
  onCloseClick?: () => void
}

export interface TabsProps extends ElementProps {
  /** `Attribute` `Required` List of tabs that will be shown in order */
  tabs: TabItemProps[]
  /** `Styling` Will adjust the tabs position on screen */
  alignment?: RightCenteredAlignType
  /** `Styling` Set tab's size on bulma's size tokens */
  size?: SizeWithoutNormalType
  /** `Styling` Set tab's size on bulma's size tokens */
  format?: TabsFormatType
  /** `Styling` Will add round tabs borders. Only visible if `format` is set to `is-toggle` */
  isRounded?: boolean
  /** `Styling` The whole container will occupy its parent container width */
  isFullWidth?: boolean
}

export interface HelperProps {
  text?: string
  color?: BasicColorType
}

export interface InputControlProps extends ElementProps {
  /** `Attribute` Sets a custom label above the Input to indicate its usage */
  labelText?: string
  /** `Attribute` `Required` control's input configuration which will be wrapped */
  inputConfig: InputProps
  /** `Attribute` Sets a custom text below the input to show a message */
  helper?: HelperProps
  /** `Attribute` `Icon` configuration that will be shown in Input's left side */
  leftIcon?: IconProps
  /** `Attribute` `Icon` configuration that will be shown in Input's right side */
  rightIcon?: IconProps
  /** `Styling` Set control and its input size on bulma's size tokens */
  size?: SizeWithoutNormalType
  /** `Styling` Will add an animated spinner on input's right side */
  isLoading?: boolean
  /** `Styling` Used for `FormField` styling purpose only. Will strech the input and its container in full-width */
  isExpanded?: boolean
  /** `Styling` Will adjust field's sections (label, input/s and helper) in horizontal position */
  isHorizontal?: boolean
}

export interface PanelBlockItemProps {
  /** `Attribute` `Required` Indicates to component's parser which type of component will be rendered based on its option */
  type: PanelBlockItemType
  /** `Attribute` `Required` The component properties that will configure that specific instance */
  props: InputControlProps | IconProps | ButtonProps
}

export interface PanelBlockProps extends ComposedElementProps, ClickeableProps {
  /** `Attribute` `Required` Configuration object with a type and a set of props based on the available components that could be rendered in each `PanelBlock` */
  config: PanelBlockItemProps
  /** `Attribute` Usable when config's U is `icon` only. It will display a text next to mentioned icon (for user purposes) */
  blockText?: string
  /** `Styling` Used for `PanelBlock` styling purpose only. Will mark its rendered component as the one selected among its group */
  isActive?: boolean
}

export interface PanelTabItem extends ClickeableProps {
  /** `Attribute` `Required` Will show the text to the user in shape of tab */
  text: string
  /** `Styling` Used for `PanelTab` styling purpose only. Will mark its rendered component as the one selected among its group */
  isActive?: boolean
}

export interface PanelTabsProps extends ElementProps {
  /** `Attribute` `Required` A list of configuration objects that will render a set of tabs */
  tabList: PanelTabItem[]
}

export interface LevelItemProps extends ElementProps {
  /** `Attribute` `Required` Reffers to the component or string content that will be shown inside the level */
  content: SingleChildType
  /** `Styling` Centers item's content horizontally */
  isCentered?: boolean
}

export interface FooterProps extends ComposedElementProps {
  /** `Attribute` `Required` Reffers to the component, list of components or string content that will be shown inside the footer */
  content: ChildrenType
  /** `Styling` Centers footer¿s content horizontally */
  isContentCentered?: boolean
}

export interface MediaProps extends ElementProps {
  /** `Attribute` Reffers to the component or string content that will be shown inside the component's left side */
  leftContent?: SingleChildType
  /** `Attribute` Reffers to the component or string content that will be shown inside the component's center */
  centerContent?: SingleChildType
  /** `Attribute` Reffers to the component or string content that will be shown inside the component's right side */
  rightContent?: SingleChildType
}

export interface SectionProps extends ElementProps {
  /** `Attribute` `Required` Reffers to the component or string content that will be shown inside the section */
  content: SingleChildType
  /** `Styling` Set button's size on bulma's size tokens */
  size?: MediumAndLargeSizeType
}

export interface NavBarDropdownProps extends ComposedElementProps {
  /** `Attribute` `Required` It will show the presentation text to be clicked or hovered in order to display its menu */
  text: string
  /** `Attribute` `Required` A list of configuration objects that will render in dropdown's menu. Those can be items or dividers */
  items: Array<NavBarItemProps | 'divider'>
  /** `Styling` Used for `NavBar` styling purpose only. Will set the dropdown on a specific position based on the proveded value */
  position?: RightLeftAlignType
  /** `Styling` Used to display dropdown's menu when user clicks on its text */
  isActive?: boolean
  /** `Styling` Similar to `isActive`, but will display when user hovers its pointer on its text */
  isHoverable?: boolean
  /** `Styling` Sets dropdown's menu on top of the text instead default styling */
  hasDropdownUp?: boolean
  /** `Styling` Sets dropdown's menu design like a box, also adds some animation when its diplayed */
  hasBoxedMenu?: boolean
  /** `Styling` Removes dropdown's indicating arrow */
  isArrowLess?: boolean
}

interface BrandConfigProps extends Omit<NavBarItemProps, 'children'> {
  children: SingleChildType
}

export interface NavBarBrandProps extends ElementProps {
  /** `Attribute` `Required` Configuration object to inject a `NavBarItem` with a Image configuration as its children */
  brandConfig: BrandConfigProps
  /** `Styling` It sets brand's burger button as active (changing looks from a burger to a cross) */
  isBurgerActive?: boolean
}

export interface TableRowProps
  extends ElementProps,
    ColoredProps,
    ClickeableProps {
  /** `Attribute` Configuration object to inject a `TableHeaderCell` as row's head */
  headCell?: TableHeadCellProps
  /** `Attribute` `Required` List of `TableCell` that will be rendered on the table */
  listOfCells: TableCellProps[]
  /** `Styling` Used for `Table` styling purpose only. Will set row's background color to indicate it has been selected by the user */
  isSelected?: boolean
}

export enum FormFieldType {
  INPUT = 'input',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  RADIOBUTTON = 'radiobutton',
  TEXTAREA = 'textarea'
}

export type FormFieldConfig =
  | InputControlProps
  | SelectProps
  | CheckBoxProps
  | RadioButtonProps
  | TextAreaProps

export interface FormFieldElement {
  type: FormFieldType
  config: FormFieldConfig
}

export interface FormFieldInputProps extends ElementProps {
  /** `Attribute` `Required` Main input that will use the provided label and helper */
  mainInput: FormFieldElement
  /** `Attribute` Input that will be included at main's left (will work only if `withAddons` is in `true`) */
  leftInput?: FormFieldElement
  /** `Attribute` Input that will be included at main's right (will work only if `withAddons` is in `true`) */
  rightInput?: FormFieldElement
  /** `Styling` Will adjust field's sections (label, input/s and helper) in horizontal position */
  isHorizontal?: boolean
}

export interface TagListProps extends ElementProps {
  /** `Attribute` List of tags to fix their space evenly */
  listOfTags: TagProps[]
}
