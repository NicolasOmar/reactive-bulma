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

export type ElementSizeType =
  | 'is-small'
  | 'is-normal'
  | 'is-medium'
  | 'is-large'

export type SizeWithoutNormalType = Exclude<ElementSizeType, 'is-normal'>

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
