// COMMON PROPS
import { ElementProps } from './commonProps'
// COMPONENT PROPS
import {
  InputControlProps,
  PanelBlockProps,
  PanelTabsProps
} from './moleculeProps'
// TYPES & INTERFACES
import { basicColorType } from '../types/styleTypes'

export interface FormFieldHelperProps {
  text?: string
  color?: basicColorType
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
  color?: basicColorType
}
