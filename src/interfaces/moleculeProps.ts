import { ButtonProps } from './atomProps'

export interface ButtonGroupProps {
  /** `Atribute` Array of button objects that will be shown */
  buttonList: ButtonProps[]
  /** `Styling` Will group the list of buttonList in a single line */
  isAttached?: boolean
}
