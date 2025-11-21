import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import NavBar from '.'
import { Image } from '@components/atoms'
// TYPES & INTERFACES
import { NavBarProps } from '@interfaces/organismProps'
import { NavBarItemProps } from '@interfaces/atomProps'
// FUNCTIONS
import { createObjArray } from '@functions/generators'
// MOCKS
import { testing } from './index.mocks.json'
import navBarBrandMocks from '@components/molecules/NavBarBrand/index.mocks.json'

const itemListWithDividers = createObjArray({
  numberOfItems: 7,
  externalParser: i => ({ children: `Dropdown item #${++i}` })
}) as NavBarItemProps[]

describe('NavBar', () => {
  const {
    basicTestId,
    basicBrandTestId,
    basicStartTestId,
    basicEndTestId,
    testClasses
  } = testing

  test('Should render the component', () => {
    render(<NavBar />)
    const testNavBar = screen.getByTestId(basicTestId)

    expect(testNavBar).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: NavBarProps = {
        [name]: value
      }

      render(<NavBar {...classTestObject} />)

      const testStylingPropValueNavBarGroup =
        screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueNavBarGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should render the component with all configuration objects', () => {
    const allConfigsAddedObject = {
      brandConfig: {
        brandConfig: {
          children: (
            <Image
              {...navBarBrandMocks.testing.testBasicConfig.brandConfig.children}
            />
          )
        }
      },
      itemsAtStart: {
        itemList: [{ text: 'Hello in the start', items: itemListWithDividers }]
      },
      itemsAtEnd: {
        itemList: [{ text: 'Hello in the end', items: itemListWithDividers }]
      }
    } as NavBarProps

    render(<NavBar {...allConfigsAddedObject} />)
    const testNavBarBrand = screen.getByTestId(basicBrandTestId)
    const testNavBarStart = screen.getByTestId(basicStartTestId)
    const testNavBarEnd = screen.getByTestId(basicEndTestId)

    expect(testNavBarBrand).toBeInTheDocument()
    expect(testNavBarStart).toBeInTheDocument()
    expect(testNavBarEnd).toBeInTheDocument()
  })
})
