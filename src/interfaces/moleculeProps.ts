// COMMON PROPS
import { ElementProps } from './commonProps'
// COMPONENT PROPS
import { ButtonProps } from './atomProps'

export interface ButtonGroupProps extends ElementProps {
  /** `Atribute` Array of button objects that will be shown */
  buttonList: ButtonProps[]
  /** `Styling` Will group the list of buttonList in a single line */
  isAttached?: boolean
  /** `Styling` Sets group position on the container */
  position?: 'left' | 'centered' | 'right'
}
