type ZeroSizesType = '0'

type SixSizesTypes = '1' | '2' | '3' | '4' | '5' | '6'

type EightSizesTypes = SixSizesTypes | '7' | '8'

type TwelveSizesTypes = EightSizesTypes | '9' | '10' | '11' | '12'

export type CommonSizeType = TwelveSizesTypes

export type AbstractSizeType =
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-quarter'
  | 'full'
  | 'four-fifths'
  | 'three-fifths'
  | 'two-fifths'
  | 'one-fifth'

export type ColumnSizeType = CommonSizeType | AbstractSizeType

export type ColumnOffsetType = TwelveSizesTypes

export type TitleSizeType = SixSizesTypes

export type ColorType =
  | 'white'
  | 'light'
  | 'dark'
  | 'black'
  | 'text'
  | 'ghost'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export type ColorModeType = 'light' | 'dark'

export type FixedImageSizeType =
  | '16x16'
  | '24x24'
  | '32x32'
  | '48x48'
  | '64x64'
  | '96x96'
  | '128x128'
  | 'square'
  | '1by1'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3'
  | 'fullwidth'

export type BaseSizeType = 'small' | 'medium' | 'large'

export type SizeWithNormalType = BaseSizeType | 'normal'

export type SizeWithHeightType = BaseSizeType | 'halfheight' | 'fullheight'

export type MediumAndLargeSizeType = Exclude<BaseSizeType, 'small'>

export type ColumnGapType = EightSizesTypes

export type ElementAlignType = 'centered' | 'right' | 'left'

export type RightCenteredAlignType = Exclude<ElementAlignType, 'left'>

export type RightLeftAlignType = Exclude<ElementAlignType, 'centered'>

export type BreadcrumbSeparatorType = 'arrow' | 'bullet' | 'dot' | 'succeeds'

export type TabsFormatType = 'boxed' | 'toggle'

export type GridGapType = ZeroSizesType | EightSizesTypes

export type GridColumnGapType = ZeroSizesType | EightSizesTypes

export type GridRowGapType = ZeroSizesType | EightSizesTypes

export type GridCellMinWidthType =
  | TwelveSizesTypes
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'
  | '32'

export type FixedGridColumnsType = ZeroSizesType | TwelveSizesTypes

export type GridCellPositionType =
  | 'col-start'
  | 'col-from-end'
  | 'col-span'
  | 'row-start'
  | 'row-from-end'
  | 'row-span'
