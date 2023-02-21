import React from 'react'
// PROPS
import { ColumnProps } from '../../../interfaces/atomProps'

const Column: React.FC<ColumnProps> = ({ size = null, offset = null }) => {
  const classes = ['column', size, offset].filter(_class => _class).join(' ')
  return <section className={classes}>Hello there</section>
}

export default Column
