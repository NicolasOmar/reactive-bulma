// TYPES
import { columnOffsetType, columnSizeType } from '../types/styleTypes'

export interface ButtonProps {
  text?: string
}

export interface ColumnProps extends React.ComponentPropsWithoutRef<'section'> {
  size?: columnSizeType
  offset?: columnOffsetType
  isNarrow?: boolean
}
