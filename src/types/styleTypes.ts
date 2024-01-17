export type columnSizeType =
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

export type titleSizeType = 'is-1' | 'is-2' | 'is-3' | 'is-4' | 'is-5' | 'is-6'

export type columnOffsetType =
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

export type basicColorType =
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

export type textColorType =
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

export type fixedImageSizeType =
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

export type elementSizeType =
  | 'is-small'
  | 'is-normal'
  | 'is-medium'
  | 'is-large'

export type sizeWithoutNormalType = Exclude<elementSizeType, 'is-normal'>

export type iconColorModeType = 'light' | 'dark'

export type columnGapType =
  | 'is-0'
  | 'is-1'
  | 'is-2'
  | 'is-3'
  | 'is-4'
  | 'is-5'
  | 'is-6'
  | 'is-7'
  | 'is-8'

export type elementAlignType = 'is-centered' | 'is-right' | 'is-left'

export type rightCenteredAlignType = Exclude<elementAlignType, 'is-left'>

export type rightLeftAlignType = Exclude<elementAlignType, 'is-centered'>

export type breadcrumbSeparatorType =
  | 'has-arrow-separator'
  | 'has-bullet-separator'
  | 'has-dot-separator'
  | 'has-succeeds-separator'

export type tabsFormatType = 'is-boxed' | 'is-toggle'
