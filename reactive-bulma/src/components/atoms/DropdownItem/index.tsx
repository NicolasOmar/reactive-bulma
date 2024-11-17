import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { DropdownItemProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const DropdownItem: React.FC<DropdownItemProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  itemText,
  type = 'item',
  isActiveItem = false,
  onClick = null
}) => {
  const isDivider = type === 'divider'
  const itemTypeClass = isDivider ? 'dropdown-divider' : 'dropdown-item'
  const dropdownItemClasses = parseClasses([
    itemTypeClass,
    isActiveItem && !isDivider ? 'is-active' : null,
    cssClasses
  ])

  const dropdownItemConfig = {
    'data-testid':
      testId ??
      parseTestId({
        tag: itemTypeClass,
        parsedClasses: `${dropdownItemClasses}-${type}`
      }),
    'className': dropdownItemClasses,
    'style': style ?? undefined,
    'onClick': onClick ?? undefined
  }

  switch (type) {
    case 'item':
      return (
        <div {...dropdownItemConfig}>
          <p>{itemText}</p>
        </div>
      )
    case 'divider':
      return <hr {...dropdownItemConfig} />
    case 'link':
    default:
      return <a {...dropdownItemConfig}>{itemText}</a>
  }
}

export default DropdownItem
