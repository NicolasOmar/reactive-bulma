import React from 'react'
import { render } from '@testing-library/react'

export const renderTestingTableContainer = (element: React.ReactElement) =>
  render(
    <table>
      <tbody>
        <tr>{element}</tr>
      </tbody>
    </table>
  )
