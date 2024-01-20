import React from 'react'
// TYPES & INTERFACES
import { NotificationProps } from '../../../interfaces/moleculeProps'
// COMPONENTS
import { Delete } from '../../atoms'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Notification: React.FC<NotificationProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children = null,
  deleteButton = null,
  color = null,
  isLightColor = null
}) => {
  const notificationClasses = parseClasses([
    'notification',
    color,
    isLightColor ? 'is-light' : null,
    cssClasses
  ])
  const notificationTestId =
    testId ??
    parseTestId({
      tag: 'notification',
      parsedClasses: notificationClasses
    })

  return (
    <section
      data-testid={notificationTestId}
      className={notificationClasses}
      style={style ?? undefined}
    >
      {deleteButton ? <Delete {...deleteButton} /> : null}
      {children}
    </section>
  )
}

export default Notification
