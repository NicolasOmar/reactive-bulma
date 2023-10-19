import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { DropdownItemProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const DropdownItem: React.FC<DropdownItemProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  itemText,
  isLink = false,
  isDivider = false,
  isActiveItem = false,
  onClick = null
}) => {
  const itemTypeClass = isDivider ? 'dropdown-divider' : 'dropdown-item'
  const dropdownItemClasses = parseClasses([
    itemTypeClass,
    isActiveItem && !isDivider ? 'is-active' : null,
    cssClasses
  ])

  const dropdownItemConfig = {
    'data-testid':
      testId ??
      parseTestId({ tag: itemTypeClass, parsedClasses: dropdownItemClasses }),
    'className': dropdownItemClasses,
    'style': style ?? undefined,
    'onClick': onClick ?? undefined
  }

  if (isLink) {
    return <a {...dropdownItemConfig}>{itemText}</a>
  }

  if (isDivider) return <hr {...dropdownItemConfig} />

  return (
    <div {...dropdownItemConfig}>
      <p>{itemText}</p>
    </div>
  )
}

export default DropdownItem
