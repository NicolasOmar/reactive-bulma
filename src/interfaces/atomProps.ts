// TYPES
import {
  basicColorType,
  columnOffsetType,
  columnSizeType,
  sizeType
} from '../types/styleTypes'

export interface ColumnProps extends React.ComponentPropsWithoutRef<'section'> {
  size?: columnSizeType
  offset?: columnOffsetType
  isNarrow?: boolean
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text?: string
  style?: React.CSSProperties
  color?: basicColorType
  isLightColor?: boolean
  isInvertedColor?: boolean
  isOutlined?: boolean
  isRounded?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  isStatic?: boolean
  size?: sizeType
  onClick?: () => void
}

export interface ProgressBarProps
  extends React.ComponentPropsWithoutRef<'progress'> {
  value?: number
  max?: number
  style?: React.CSSProperties
  color?: basicColorType
  size?: sizeType
  isLoading?: boolean
}

export interface BlockProps extends React.ComponentPropsWithoutRef<'section'> {
  testId?: string
}
