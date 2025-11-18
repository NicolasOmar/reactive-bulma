import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Grid from '.'
// TYPES & INTERFACES
import { GridProps } from '@interfaces/moleculeProps'
// FUNCTIONS
// MOCKS
import { testing } from './index.mocks.json'

describe('Grid', () => {
  const {
    basicTestId,
    basicContainerTestId,
    testParagraph,
    testClasses,
    testContainerClasses
  } = testing
  const stubChildren = { children: testParagraph }

  test('Should render the component', () => {
    render(<Grid listOfCells={[stubChildren]} />)
    const testGrid = screen.getByTestId(basicTestId)

    expect(testGrid).toBeInTheDocument()
  })

  test('Should render the container component', () => {
    render(
      <Grid
        listOfCells={[stubChildren]}
        isFixed={true}
      />
    )
    const testGridWithFixedContainer = screen.getByTestId(basicContainerTestId)

    expect(testGridWithFixedContainer).toBeInTheDocument()
  })

  test('Should render the component with specific classes', () => {
    testClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: GridProps = {
        [name]: value,
        listOfCells: []
      }

      render(<Grid {...classTestObject} />)

      const testStylingPropValueGridGroup = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueGridGroup.className).toContain(result)
      cleanup()
    })
  })

  test('Should render the component with specific classes', () => {
    testContainerClasses.forEach(({ name, value, result }) => {
      const testIdWithClass = `${basicContainerTestId}-${result.replace(
        /is-|has-/gm,
        ''
      )}`
      const classTestObject: GridProps = {
        [name]: value,
        listOfCells: [],
        isFixed: true
      }

      render(<Grid {...classTestObject} />)

      const testStylingPropValueGridGroup = screen.getByTestId(testIdWithClass)
      expect(testStylingPropValueGridGroup.className).toContain(result)
      cleanup()
    })
  })
})
