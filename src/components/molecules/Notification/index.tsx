import React from 'react'
// TYPES & INTERFACES
import { NotificationProps } from '@interfaces/moleculeProps'
// COMPONENTS
import { Delete } from '@components/atoms'
// CONSTANTS
import { COMMON_CLASSES } from '@constants/classes'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Notification: React.FC<NotificationProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  children = null,
  deleteButton = null,
  color = null,
  isLightColor = null
}) => {
  const notificationBaseClass = 'notification'
  const notificationClasses = parseClasses([
    notificationBaseClass,
    color ? `${COMMON_CLASSES.IS}${color}` : null,
    isLightColor ? 'is-light' : null,
    cssClasses
  ])
  const notificationTestId =
    testId ??
    parseTestId({
      tag: notificationBaseClass,
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
