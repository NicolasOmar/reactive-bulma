import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Card from '.'
import { Title } from '@components/atoms'
// TYPES & INTERFACES
import { CardFooterProps, CardProps } from '@interfaces/organismProps'
// FUNCTIONS
import { createObjArray, generateKey } from '@functions/generators'
// MOCKS
import { testing } from './index.mocks.json'
import imageMocks from '@components/atoms/Image/index.mocks.json'

describe('Card', () => {
  const {
    basicTestId,
    basicTestConfig,
    basicHeaderTestId,
    basicImageTestId,
    basicContentTestId,
    basicFootItemTestId,
    headerTextConfig
  } = testing
  const footerItems = createObjArray<CardFooterProps>({
    externalParser: i => ({ text: `Link #${++i}` })
  })
  const listOfContents = Array(3)
    .fill(null)
    .map((_, i) => (
      <Title
        key={`test-title-for-card-conent-${generateKey()}`}
        main={{ text: `Test content #${++i}`, type: 'title' }}
      />
    ))

  test('Should render the component', () => {
    render(<Card {...basicTestConfig} />)

    const testCard = screen.getByTestId(basicTestId)
    const testCardContent = screen.getByTestId(basicContentTestId)
    expect(testCard).toBeInTheDocument()
    expect(testCardContent).toBeInTheDocument()
  })

  test('Should render the component with multiple contents', () => {
    render(<Card content={listOfContents} />)

    listOfContents.forEach((_, i) => {
      const testCardContentItem = screen.getByTestId(
        `${basicContentTestId}-item-${i}`
      )
      expect(testCardContentItem).toBeInTheDocument()
    })
  })

  test('Should render component header', () => {
    const cardWithHeaderConfig = {
      ...basicTestConfig,
      ...headerTextConfig
    }
    render(<Card {...cardWithHeaderConfig} />)

    const testCardHeader = screen.getByTestId(basicHeaderTestId)
    expect(testCardHeader).toBeInTheDocument()
  })

  test('Should render component image', () => {
    const cardWithImageConfig = {
      ...basicTestConfig,
      image: {
        src: imageMocks.testing.testSrc
      }
    }
    render(<Card {...cardWithImageConfig} />)

    const testCardImage = screen.getByTestId(basicImageTestId)
    expect(testCardImage).toBeInTheDocument()
  })

  test('Should render component footer links', () => {
    const cardWithFooterConfig = {
      ...basicTestConfig,
      footerLinks: footerItems
    } as CardProps

    render(<Card {...cardWithFooterConfig} />)

    footerItems.forEach((_footItem, i) => {
      const testCardFootItem = screen.getByTestId(`${basicFootItemTestId}-${i}`)
      expect(testCardFootItem).toBeInTheDocument()
    })
  })

  test('Should check that each foot item has been clicked', () => {
    const clickeableFooterConfig = footerItems.map(_footConfig => ({
      ..._footConfig,
      onClick: jest.fn()
    }))
    const cardWithFooterConfig = {
      ...basicTestConfig,
      footerLinks: clickeableFooterConfig
    } as CardProps

    render(<Card {...cardWithFooterConfig} />)

    clickeableFooterConfig.forEach((_footItem, i) => {
      const testCardFootItem = screen.getByTestId(`${basicFootItemTestId}-${i}`)
      expect(testCardFootItem).toBeInTheDocument()

      fireEvent.click(testCardFootItem)
      expect(_footItem.onClick).toHaveBeenCalled()
      expect(_footItem.onClick).toHaveBeenCalledTimes(1)
    })
  })
})
