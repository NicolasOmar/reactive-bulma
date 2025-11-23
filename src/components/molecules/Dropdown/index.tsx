import React, { Fragment, useMemo, useState } from 'react'
// COMPONENTS
import { DropdownItem, DropdownTrigger } from '@components/atoms'
// TYPES & INTERFACES
import { DropdownProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const Dropdown: React.FC<DropdownProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  isHoverable = null,
  isRightAligned = null,
  isContentUp = null,
  inputText,
  dropdownPointer = 'dropdown-menu',
  listOfItems
}) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  const dropdownClasses = parseClasses([
    'dropdown',
    isMenuActive ? 'is-active' : null,
    isHoverable ? 'is-hoverable' : null,
    isRightAligned ? 'is-right' : null,
    isContentUp ? 'is-up' : null,
    cssClasses
  ])
  const dropdownTestId =
    testId ?? parseTestId({ tag: 'dropdown', parsedClasses: dropdownClasses })

  const memorizedDropdownMenu = useMemo(
    () => (
      <section className='dropdown-content'>
        {listOfItems.map((_dropdownItemConfig, i) => {
          const isFirstItemInMenu = listOfItems.length > 1 && i === 0
          return isFirstItemInMenu ? (
            <DropdownItem
              key={`dropdown-item-${generateKey()}`}
              {..._dropdownItemConfig}
            />
          ) : (
            <Fragment key={`dropdown-item-${generateKey()}-section`}>
              <DropdownItem
                key={`dropdown-item-${generateKey()}-divider`}
                type='divider'
                itemText='divider'
              />
              <DropdownItem
                key={`dropdown-item-${generateKey()}`}
                {..._dropdownItemConfig}
              />
            </Fragment>
          )
        })}
      </section>
    ),
    [listOfItems]
  )

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
        {memorizedDropdownMenu}
      </section>
    </section>
  )
}

export default Dropdown
