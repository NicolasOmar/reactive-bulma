import React, { useMemo } from 'react'
// COMPONENTS
import { Image } from '@components/atoms'
// TYPES & INTERFACES
import { CardProps } from '@interfaces/organismProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const Card: React.FC<CardProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  headerText = null,
  image = null,
  content,
  footerLinks = null
}) => {
  const cardClasses = parseClasses(['card', cssClasses])
  const cardTestId =
    testId ?? parseTestId({ tag: 'card', parsedClasses: cardClasses })

  const memoizedHeader = useMemo(
    () =>
      headerText ? (
        <header
          data-testid={`${cardTestId}-header`}
          className='card-header'
        >
          <p className='card-header-title'>{headerText}</p>
          <button
            className='card-header-icon'
            aria-label='more options'
          >
            <span className='icon'>
              <i
                className='fas fa-angle-down'
                aria-hidden='true'
              ></i>
            </span>
          </button>
        </header>
      ) : null,
    [headerText, cardTestId]
  )

  const memoizedImage = useMemo(
    () =>
      image ? (
        <section
          data-testid={`${cardTestId}-image`}
          className='card-image'
        >
          <Image {...image} />
        </section>
      ) : null,
    [image, cardTestId]
  )

  const memoizedContent = useMemo(
    () => (
      <section
        data-testid={`${cardTestId}-content`}
        className='card-content'
      >
        {Array.isArray(content) ? (
          content.map((_contentConfig, i) => (
            <section
              key={`card-content-item-${generateKey()}`}
              data-testid={`${cardTestId}-content-item-${i}`}
              className='content'
            >
              {_contentConfig}
            </section>
          ))
        ) : (
          <section className='content'>{content}</section>
        )}
      </section>
    ),
    [cardTestId, content]
  )

  const memoizedFooter = useMemo(
    () =>
      footerLinks ? (
        <section className='card-footer'>
          {footerLinks.map((_footerConfig, i) => (
            <a
              key={`card-footer-item-${generateKey()}`}
              data-testid={`${cardTestId}-footer-item-${i}`}
              className='card-footer-item'
              aria-hidden='true'
              onClick={_footerConfig.onClick ?? undefined}
            >
              {_footerConfig.text}
            </a>
          ))}
        </section>
      ) : null,
    [footerLinks, cardTestId]
  )

  return (
    <section
      data-testid={cardTestId}
      className={cardClasses}
      style={style ?? undefined}
    >
      {memoizedHeader}
      {memoizedImage}
      {memoizedContent}
      {memoizedFooter}
    </section>
  )
}

export default Card
