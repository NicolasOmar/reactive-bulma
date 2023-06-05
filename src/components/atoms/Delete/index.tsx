import React from 'react'
// TYPES & INTERFACES
import { DeleteProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Delete: React.FC<DeleteProps> = ({
  testId = null,
  style = null,
  size = null,
  onClick = null
}) => {
  const deleteClasses = parseClasses(['delete', size])
  const _testId =
    testId ??
    parseTestId({
      tag: 'delete',
      parsedClasses: deleteClasses
    })

  return (
    <button
      data-testid={_testId}
      style={style ?? undefined}
      className={deleteClasses}
      onClick={onClick ?? undefined}
    />
  )
}

export default Delete
