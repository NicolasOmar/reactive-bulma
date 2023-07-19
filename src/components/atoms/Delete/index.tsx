import React from 'react'
// TYPES & INTERFACES
import { DeleteProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Delete: React.FC<DeleteProps> = ({
  testId = null,
  style = null,
  cssClasses = null,
  size = null,
  onClick = null
}) => {
  const deleteClasses = parseClasses(['delete', size, cssClasses])
  const _testId =
    testId ??
    parseTestId({
      tag: 'delete',
      parsedClasses: deleteClasses
    })

  return (
    <button
      data-testid={_testId}
      className={deleteClasses}
      style={style ?? undefined}
      onClick={onClick ?? undefined}
    />
  )
}

export default Delete
