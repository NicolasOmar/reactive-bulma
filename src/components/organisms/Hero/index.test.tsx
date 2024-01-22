import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Hero from '.'
// TYPES & INTERFACES
import { HeroProps } from '../../../interfaces/organismProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('Hero', () => {
  const { basicTestId, testClasses, basicConfig, headerConfig, footerConfig } =
    testing
  const bigSizeProps = {
    body: basicConfig,
    header: headerConfig,
    footer: footerConfig
  }

  test('Should render the component', () => {
    render(<Hero body={basicConfig} />)
    const testHero = screen.getByTestId(basicTestId)

    expect(testHero).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: HeroProps = {
        body: basicConfig,
        [name]: value
      }

      render(<Hero {...classTestObject} />)

      const testStylingPropValueHeroGroup = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueHeroGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should render only the body if is not fullsize', () => {
    const largeTestId = `${basicTestId}-large`
    const bigSizeConfig = {
      ...bigSizeProps,
      size: 'is-large'
    } as HeroProps

    render(<Hero {...bigSizeConfig} />)

    const testHeroBody = screen.getByTestId(`${largeTestId}-body`)

    expect(testHeroBody).toBeInTheDocument()
    expect(() => screen.getByTestId(`${largeTestId}-head`)).toThrow()
    expect(() => screen.getByTestId(`${largeTestId}-foot`)).toThrow()
  })

  test('Should render body, header and footer by been a full-size version', () => {
    const fullSizeTestId = `${basicTestId}-fullheight`
    const fullSizeConfig = {
      ...bigSizeProps,
      size: 'is-fullheight'
    } as HeroProps

    render(<Hero {...fullSizeConfig} />)

    const testHeroBody = screen.getByTestId(`${fullSizeTestId}-body`)
    const testHeroHeader = screen.getByTestId(`${fullSizeTestId}-head`)
    const testHeroFooter = screen.getByTestId(`${fullSizeTestId}-foot`)

    expect(testHeroBody).toBeInTheDocument()
    expect(testHeroHeader).toBeInTheDocument()
    expect(testHeroFooter).toBeInTheDocument()
  })
})
