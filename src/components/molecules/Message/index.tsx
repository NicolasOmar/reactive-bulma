import React from 'react'
// COMPONENTS
import { Delete } from '../../atoms'
// TYPES & INTERFACES
import { MessageProps } from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

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
  const messageClasses = parseClasses(['message', color, size, cssClasses])
  const messageTestId =
    testId ?? parseTestId({ tag: 'message', parsedClasses: messageClasses })

  return (
    <article
      data-testid={messageTestId}
      className={messageClasses}
      style={style ?? undefined}
    >
      {headerText && (
        <section
          data-testid={`${messageTestId}-header`}
          className='message-header'
        >
          <p>{headerText}</p>
          {deleteButton ? <Delete {...deleteButton} /> : null}
        </section>
      )}
      <section
        data-testid={`${messageTestId}-body`}
        className='message-body'
      >
        {bodyText}
      </section>
    </article>
  )
}

export default Message
