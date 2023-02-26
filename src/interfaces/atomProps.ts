// TYPES
import {
  basicColorType,
  columnOffsetType,
  columnSizeType,
  sizeType
} from '../types/styleTypes'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text?: string
  color: basicColorType
  isLightColor?: boolean
  isInvertedColor?: boolean
  isOutlined?: boolean
  isRounded?: boolean
  isLoading?: boolean
  isDisabled: boolean
  size?: sizeType
}

export interface ColumnProps extends React.ComponentPropsWithoutRef<'section'> {
  size?: columnSizeType
  offset?: columnOffsetType
  isNarrow?: boolean
}
