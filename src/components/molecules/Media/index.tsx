import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { MediaProps } from '../../../interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { Image } from '../../atoms/index'

const Media: React.FC<MediaProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  mediaImage,
  content = null
}) => {
  const mediaClasses = parseClasses(['media', cssClasses])
  const mediaTestId =
    testId ?? parseTestId({ tag: 'media', parsedClasses: mediaClasses })

  return (
    <article
      data-testid={mediaTestId}
      className={mediaClasses}
      style={style ?? undefined}
    >
      <section
        data-testid={`${mediaTestId}-left`}
        className='media-left'
      >
        <Image {...mediaImage} />
      </section>
      <section
        data-testid={`${mediaTestId}-content`}
        className='media-content'
      >
        {content ?? null}
      </section>
    </article>
  )
}

export default Media
