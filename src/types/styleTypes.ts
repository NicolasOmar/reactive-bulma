type SixSizesTypes = '1' | '2' | '3' | '4' | '5' | '6'

type TwelveSizesTypes = SixSizesTypes | '7' | '8' | '9' | '10' | '11' | '12'

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

export type ColumnGapType =
  | 'is-0'
  | 'is-1'
  | 'is-2'
  | 'is-3'
  | 'is-4'
  | 'is-5'
  | 'is-6'
  | 'is-7'
  | 'is-8'

export type ElementAlignType = 'is-centered' | 'is-right' | 'is-left'

export type RightCenteredAlignType = Exclude<ElementAlignType, 'is-left'>

export type RightLeftAlignType = Exclude<ElementAlignType, 'is-centered'>

export type BreadcrumbSeparatorType =
  | 'has-arrow-separator'
  | 'has-bullet-separator'
  | 'has-dot-separator'
  | 'has-succeeds-separator'

export type TabsFormatType = 'is-boxed' | 'is-toggle'

export type GridGapType =
  | 'is-gap-0'
  | 'is-gap-1'
  | 'is-gap-2'
  | 'is-gap-3'
  | 'is-gap-4'
  | 'is-gap-5'
  | 'is-gap-6'
  | 'is-gap-7'
  | 'is-gap-8'

export type GridColumnGapType =
  | 'is-column-gap-0'
  | 'is-column-gap-1'
  | 'is-column-gap-2'
  | 'is-column-gap-3'
  | 'is-column-gap-4'
  | 'is-column-gap-5'
  | 'is-column-gap-6'
  | 'is-column-gap-7'
  | 'is-column-gap-8'

export type GridRowGapType =
  | 'is-row-gap-0'
  | 'is-row-gap-1'
  | 'is-row-gap-2'
  | 'is-row-gap-3'
  | 'is-row-gap-4'
  | 'is-row-gap-5'
  | 'is-row-gap-6'
  | 'is-row-gap-7'
  | 'is-row-gap-8'

export type GridCellMinWidthType =
  | 'is-col-min-1'
  | 'is-col-min-2'
  | 'is-col-min-3'
  | 'is-col-min-4'
  | 'is-col-min-5'
  | 'is-col-min-6'
  | 'is-col-min-7'
  | 'is-col-min-8'
  | 'is-col-min-9'
  | 'is-col-min-10'
  | 'is-col-min-11'
  | 'is-col-min-12'
  | 'is-col-min-13'
  | 'is-col-min-14'
  | 'is-col-min-15'
  | 'is-col-min-16'
  | 'is-col-min-17'
  | 'is-col-min-18'
  | 'is-col-min-19'
  | 'is-col-min-20'
  | 'is-col-min-21'
  | 'is-col-min-22'
  | 'is-col-min-23'
  | 'is-col-min-24'
  | 'is-col-min-25'
  | 'is-col-min-26'
  | 'is-col-min-27'
  | 'is-col-min-28'
  | 'is-col-min-29'
  | 'is-col-min-30'
  | 'is-col-min-31'
  | 'is-col-min-32'

export type FixedGridColumnsType =
  | 'has-0-cols'
  | 'has-1-cols'
  | 'has-2-cols'
  | 'has-3-cols'
  | 'has-4-cols'
  | 'has-5-cols'
  | 'has-6-cols'
  | 'has-7-cols'
  | 'has-8-cols'
  | 'has-9-cols'
  | 'has-10-cols'
  | 'has-11-cols'
  | 'has-12-cols'

export type GridCellPositionType =
  | 'is-col-start'
  | 'is-col-from-end'
  | 'is-col-span'
  | 'is-row-start'
  | 'is-row-from-end'
  | 'is-row-span'
