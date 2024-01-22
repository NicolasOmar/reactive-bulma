import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { HeroProps } from '../../../interfaces/organismProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Hero: React.FC<HeroProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  header = null,
  body,
  footer = null,
  color = null,
  size = null
}) => {
  const heroClasses = parseClasses(['hero', color, size, cssClasses])
  const heroTestId =
    testId ?? parseTestId({ tag: 'hero', parsedClasses: heroClasses })

  return (
    <section
      data-testid={heroTestId}
      className={heroClasses}
      style={style ?? undefined}
    >
      {size === 'is-fullheight' ? (
        <section
          data-testid={`${heroTestId}-head`}
          className='hero-head'
        >
          {header}
        </section>
      ) : null}
      <section
        data-testid={`${heroTestId}-body`}
        className='hero-body'
      >
        {body}
      </section>
      {size === 'is-fullheight' ? (
        <section
          data-testid={`${heroTestId}-foot`}
          className='hero-foot'
        >
          {footer}
        </section>
      ) : null}
    </section>
  )
}

export default Hero
