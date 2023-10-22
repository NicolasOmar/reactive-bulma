import React, { useState } from 'react'
// COMPONENTS
import { DropdownItem, DropdownTrigger } from '../../atoms'
// TYPES & INTERFACES
import { DropdownProps } from '../../../interfaces/moleculeProps'
import { DropdownItemProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const renderDropdownMenu = (items: DropdownItemProps[]) => (
  <section className='dropdown-content'>
    {items.map((dropdownItemConfig, i) => {
      const isFirstItemInMenu = items.length > 1 && i === 0
      return isFirstItemInMenu ? (
        <DropdownItem
          key={`dropdown-item-${i}`}
          {...dropdownItemConfig}
        />
      ) : (
        <>
          <DropdownItem
            key={`dropdown-item-${i}-divider`}
            type='divider'
            itemText='divider'
          />
          <DropdownItem
            key={`dropdown-item-${i}`}
            {...dropdownItemConfig}
          />
        </>
      )
    })}
  </section>
)

const Dropdown: React.FC<DropdownProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  inputText,
  dropdownPointer = 'dropdown-menu',
  listOfItems,
  isActive = false
}) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  const dropdownClasses = parseClasses([
    'dropdown',
    isActive || isMenuActive ? 'is-active' : null,
    cssClasses
  ])
  const dropdownTestId =
    testId ?? parseTestId({ tag: 'dropdown', parsedClasses: dropdownClasses })

  return (
    <section
      data-testid={dropdownTestId}
      className={dropdownClasses}
      style={style ?? undefined}
    >
      <DropdownTrigger
        {...{
          menuText: inputText,
          dropdownPointer,
          onClick: () => setIsMenuActive(!isMenuActive)
        }}
      />
      <section
        className='dropdown-menu'
        id={dropdownPointer}
        role='menu'
      >
        {renderDropdownMenu(listOfItems)}
      </section>
    </section>
  )
}

export default Dropdown
