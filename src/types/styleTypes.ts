export type CommonSizeType =
  | 'is-1'
  | 'is-2'
  | 'is-3'
  | 'is-4'
  | 'is-5'
  | 'is-6'
  | 'is-7'
  | 'is-8'
  | 'is-9'
  | 'is-10'
  | 'is-11'
  | 'is-12'

export type AbstractSizeType =
  | 'is-three-quarters'
  | 'is-two-thirds'
  | 'is-half'
  | 'is-one-third'
  | 'is-one-quarter'
  | 'is-full'
  | 'is-four-fifths'
  | 'is-three-fifths'
  | 'is-two-fifths'
  | 'is-one-fifth'

export type ColumnSizeType = CommonSizeType | AbstractSizeType

export type ColumnOffsetType =
  | 'is-offset-1'
  | 'is-offset-2'
  | 'is-offset-3'
  | 'is-offset-4'
  | 'is-offset-5'
  | 'is-offset-6'
  | 'is-offset-7'
  | 'is-offset-8'
  | 'is-offset-9'
  | 'is-offset-10'
  | 'is-offset-11'
  | 'is-offset-12'

export type TitleSizeType = 'is-1' | 'is-2' | 'is-3' | 'is-4' | 'is-5' | 'is-6'

export type BasicColorType =
  | 'is-white'
  | 'is-light'
  | 'is-dark'
  | 'is-black'
  | 'is-text'
  | 'is-ghost'
  | 'is-primary'
  | 'is-link'
  | 'is-info'
  | 'is-success'
  | 'is-warning'
  | 'is-danger'

export type TextColorType =
  | 'has-text-white'
  | 'has-text-black'
  | 'has-text-light'
  | 'has-text-dark'
  | 'has-text-primary'
  | 'has-text-link'
  | 'has-text-info'
  | 'has-text-success'
  | 'has-text-warning'
  | 'has-text-danger'

export type ColorVersionType = 'is-light' | 'is-dark'

export type FixedImageSizeType =
  | 'is-16x16'
  | 'is-24x24'
  | 'is-32x32'
  | 'is-48x48'
  | 'is-64x64'
  | 'is-96x96'
  | 'is-128x128'
  | 'is-square'
  | 'is-1by1'
  | 'is-5by4'
  | 'is-4by3'
  | 'is-3by2'
  | 'is-5by3'
  | 'is-16by9'
  | 'is-2by1'
  | 'is-3by1'
  | 'is-4by5'
  | 'is-3by4'
  | 'is-2by3'
  | 'is-3by5'
  | 'is-9by16'
  | 'is-1by2'
  | 'is-1by3'
  | 'is-fullwidth'

export type ElementSizeType =
  | 'is-small'
  | 'is-normal'
  | 'is-medium'
  | 'is-large'

export type SizeWithoutNormalType = Exclude<ElementSizeType, 'is-normal'>

export type SizeWithHeightType =
  | SizeWithoutNormalType
  | 'is-halfheight'
  | 'is-fullheight'

export type MediumAndLargeSizeType = Exclude<SizeWithoutNormalType, 'is-small'>

export type IconColorModeType = 'light' | 'dark'

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
