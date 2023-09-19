export interface BasicProps {
  /** `Attribute` ID used to locate the element in unit test suites (like Jest) */
  testId?: string
  /** `Attribute` *For container case*. ID used to locate the element in unit test suites (like Jest) */
  containerTestId?: string
  /** `Attribute` Custom CSS classes, applicable for specific scenarios */
  cssClasses?: string
  /** `Attribute` *For container case*. Custom CSS classes, applicable for specific scenarios */
  containerCssClasses?: string
  /** `Attribute` Custom styling applicable for specific scenarios */
  style?: React.CSSProperties
  /** `Attribute` *For container case*. Custom styling applicable for specific scenarios */
  containerStyle?: React.CSSProperties
}

export interface ContainerProps {
  /** `Attribute` *For container case*. ID used to locate the element in unit test suites (like Jest) */
  containerTestId?: string
  /** `Attribute` *For container case*. Custom CSS classes, applicable for specific scenarios */
  containerCssClasses?: string
  /** `Attribute` *For container case*. Custom styling applicable for specific scenarios */
  containerStyle?: React.CSSProperties
}

export interface ElementProps {
  /** `Attribute` ID used to locate the element in unit test suites (like Jest) */
  testId?: string
  /** `Attribute` Custom CSS classes, applicable for specific scenarios */
  cssClasses?: string
  /** `Attribute` Custom styling applicable for specific scenarios */
  style?: React.CSSProperties
}

export interface ComponentProps extends BasicProps, ElementProps {}
