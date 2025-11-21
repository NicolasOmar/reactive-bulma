import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { FooterProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Footer: React.FC<FooterProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  content,
  isContentCentered = false
}) => {
  const footerContainerClasses = parseClasses(['footer', containerCssClasses])
  const footerContentClasses = parseClasses([
    'content',
    isContentCentered ? 'has-text-centered' : null,
    cssClasses
  ])
  const footerContainerTestId =
    containerTestId ??
    parseTestId({ tag: 'footer', parsedClasses: footerContainerClasses })
  const footerContentTestId =
    testId ??
    parseTestId({
      tag: 'content',
      parsedClasses: footerContentClasses,
      rules: [
        {
          regExp: /is-|has-/gm,
          replacer: '-'
        },
        {
          regExp: /content/gm,
          replacer: ''
        }
      ]
    })

  return (
    <section
      data-testid={footerContainerTestId}
      className={footerContainerClasses}
      style={containerStyle ?? undefined}
    >
      <section
        data-testid={footerContentTestId}
        className={footerContentClasses}
        style={style ?? undefined}
      >
        {content}
      </section>
    </section>
  )
}

export default Footer
