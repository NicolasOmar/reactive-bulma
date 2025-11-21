import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { MediaProps } from '@interfaces/moleculeProps'
import { MediaSectionType, SingleChildType } from '@customTypes/domTypes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const renderMediaSection = (
  content: SingleChildType | null,
  position: MediaSectionType,
  testId: string
) =>
  content ? (
    <section
      data-testid={`${testId}-${position}`}
      className={`media-${position}`}
    >
      {content}
    </section>
  ) : null

const Media: React.FC<MediaProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  leftContent = null,
  centerContent = null,
  rightContent = null
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
      {renderMediaSection(leftContent, 'left', mediaTestId)}
      {renderMediaSection(centerContent, 'content', mediaTestId)}
      {renderMediaSection(rightContent, 'right', mediaTestId)}
    </article>
  )
}

export default Media
