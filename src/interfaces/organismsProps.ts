// COMMON PROPS
import { ElementProps } from './commonProps'
// COMPONENT PROPS
import { InputControlProps } from './moleculeProps'
// TYPES & INTERFACES
import { basicColorType } from '../types/styleTypes'

export interface FormFieldHelperProps {
  text?: string
  color?: basicColorType
}

export interface FormFieldProps extends ElementProps {
  /** `Attribute` Sets a custom text before the wrapped input to indicate its usage */
  labelText?: string
  /** `Attribute` `Required` Single or multiple `InputControlProps` config objects which will be wrapped around the `FormField` */
  inputControlConfig: InputControlProps | InputControlProps[]
  /** `Attribute` Adds a helper text below the wrapped paragraph to provide context information */
  helperConfig?: FormFieldHelperProps
  /** `Styling` Will adjust field's sections (label, input/s and helper) in horizontal position */
  isHorizontal?: boolean
  /** `Styling` Will group the list of inputs in a same wrapper (useful for several inputs with same usage, as a complex address) */
  isGrouped?: boolean
}
