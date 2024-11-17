import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { DropdownTriggerProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  menuText,
  dropdownPointer = 'dropdown-menu',
  onClick = null
}) => {
  const dropdownTriggerContainerClasses = parseClasses([
    'dropdown-trigger',
    containerCssClasses
  ])
  const dropdownTriggerContainerTestId =
    containerTestId ??
    parseTestId({
      tag: 'dropdown-trigger',
      parsedClasses: dropdownTriggerContainerClasses
    })
  const dropdownTriggerClasses = parseClasses(['button', cssClasses])
  const dropdownTriggerTestId =
    testId ??
    parseTestId({ tag: 'button', parsedClasses: dropdownTriggerClasses })

  return (
    <section
      data-testid={dropdownTriggerContainerTestId}
      className={dropdownTriggerContainerClasses}
      style={containerStyle ?? undefined}
    >
      <button
        data-testid={dropdownTriggerTestId}
        className={dropdownTriggerClasses}
        style={style ?? undefined}
        aria-haspopup='true'
        aria-controls={dropdownPointer}
        onClick={onClick ?? undefined}
      >
        <span>{menuText}</span>
        <span className='icon is-small'>
          <i
            className='mdi mdi-chevron-down'
            aria-hidden='true'
          ></i>
        </span>
      </button>
    </section>
  )
}

export default DropdownTrigger
