import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { MenuListProps } from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { MenuItem } from '../../atoms'

const MenuList: React.FC<MenuListProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  itemList
}) => {
  const menuListClasses = parseClasses(['menu-list', cssClasses])
  const menuListTestId =
    testId ?? parseTestId({ tag: 'menu-list', parsedClasses: menuListClasses })

  return (
    <ul
      data-testid={menuListTestId}
      className={menuListClasses}
      style={style ?? undefined}
    >
      {itemList.map((item, itemIndex) => {
        if ('subListTitle' in item) {
          return (
            <li key={`sub-list-menu-item-${itemIndex}`}>
              <MenuItem {...item.subListTitle} />
              <ul>
                {item.subItems.map((subItem, subItemIndex) => (
                  <MenuItem
                    key={`sub-list-menu-sub-item-${subItemIndex}`}
                    {...subItem}
                  />
                ))}
              </ul>
            </li>
          )
        } else {
          return (
            <MenuItem
              key={`sub-list-item-${itemIndex}`}
              {...item}
            />
          )
        }
      })}
    </ul>
  )
}

export default MenuList
