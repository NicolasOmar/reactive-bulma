import React from 'react'
// COMPONENTS
import { Delete } from '@components/atoms'
// TYPES & INTERFACES
import { MessageProps } from '@interfaces/moleculeProps'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Message: React.FC<MessageProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  headerText = null,
  bodyText,
  deleteButton = null,
  color = null,
  size = null
}) => {
  const messageBaseClass = 'message'
  const messageClasses = parseClasses([
    messageBaseClass,
    color ? `${COMMON_CLASSES.IS}${color}` : null,
    size,
    cssClasses
  ])
  const messageTestId =
    testId ??
    parseTestId({ tag: messageBaseClass, parsedClasses: messageClasses })

  return (
    <article
      data-testid={messageTestId}
      className={messageClasses}
      style={style ?? undefined}
    >
      {headerText && (
        <section
          data-testid={`${messageTestId}-header`}
          className={`${messageBaseClass}-header`}
        >
          <p>{headerText}</p>
          {deleteButton ? <Delete {...deleteButton} /> : null}
        </section>
      )}
      <section
        data-testid={`${messageTestId}-body`}
        className={`${messageBaseClass}-body`}
      >
        {bodyText}
      </section>
    </article>
  )
}

export default Message
