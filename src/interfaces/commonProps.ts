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

export interface ComposedElementProps extends ElementProps, ContainerProps {}

export interface ClickeableProps<
  ElementType = Element,
  EventType = MouseEvent
> {
  /** `Function` Reffers to each time the user click the element. Alone does not nothing, but can be reused for other components */
  onClick?: (event: React.MouseEvent<ElementType, EventType>) => void
}

export interface ChangeableProps<ElementType = Element> {
  /** `Function` Reffers to each time the user press a key. Alone does not nothing, but can be reused for other components */
  onChange?: (event: React.ChangeEvent<ElementType>) => void
}

export interface BlureableProps<
  ElementType = Element,
  RelatedTargetType = Element
> {
  /** `Function` Reffers to each time the user focus out the element. Alone does not nothing, but can be reused for other components */
  onBlur?: (event: React.FocusEvent<ElementType, RelatedTargetType>) => void
}

export interface InteractiveProps
  extends ClickeableProps,
    ChangeableProps,
    BlureableProps {}

export interface InteractiveOnChangeProps
  extends Omit<InteractiveProps, 'onChange'> {
  /** `Function` Reffers to each time the user click the element (I recommend using this one rather than the `onClick` method). Alone does not nothing, but can be reused for other components */
  onChange?: (event: React.ChangeEvent | React.FormEvent) => void
}

export interface NamedInputProps {
  /** `Attribute` Used to reference the input in a form */
  name?: string
}

export interface GenericObjectProps {
  [key: string]: string | number | boolean | object
}
