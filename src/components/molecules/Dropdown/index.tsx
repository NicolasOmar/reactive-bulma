import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { DropdownProps } from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { DropdownItem, DropdownTrigger } from '../../atoms'

const Dropdown: React.FC<DropdownProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  inputText,
  dropdownPointer = 'dropdown-menu',
  listOfItems,
  isActive = false
}) => {
  const dropdownClasses = parseClasses([
    'dropdown',
    isActive ? 'is-active' : null,
    cssClasses
  ])
  const dropdownTestId =
    testId ?? parseTestId({ tag: 'dropdown', parsedClasses: dropdownClasses })
  const dropdownTriggerConfig = {
    menuText: inputText,
    dropdownPointer
  }

  return (
    <section
      data-testid={dropdownTestId}
      className={dropdownClasses}
      style={style ?? undefined}
    >
      <DropdownTrigger {...dropdownTriggerConfig} />
      <section
        className='dropdown-menu'
        id={dropdownPointer}
        role='menu'
      >
        <section className='dropdown-content'>
          {listOfItems.map((dropdownItemConfig, i) => (
            <DropdownItem
              key={`dropdown-item-${i}`}
              {...dropdownItemConfig}
            />
          ))}
        </section>
      </section>
    </section>
  )
}

export default Dropdown
