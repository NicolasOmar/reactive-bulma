import React from 'react'
// TYPES & INTERFACES
import { FileProps } from '../../../interfaces/atomProps'
import { parseClasses, parseTestId } from '../../../functions/parsers'
import Icon from '../Icon'
// PARSERS

const File: React.FC<FileProps> = ({
  testId = null,
  fileName = null,
  uploadIcon = null,
  uploadText = 'Choose a file…',
  style = null,
  buttonOnRight = false,
  isFullWidth = false,
  isBoxed = false,
  color = null,
  size = null,
  onClick = null
}) => {
  const fileClasses = parseClasses([
    'file',
    fileName ? 'has-name' : null,
    buttonOnRight ? 'is-right' : null,
    isFullWidth ? 'is-fullwidth' : null,
    isBoxed ? 'is-boxed' : null,
    color,
    size
  ])
  const fileTestId =
    testId ?? parseTestId({ tag: 'file', parsedClasses: fileClasses })
  const fileInputTestId = `${fileTestId}-input`

  return (
    <section
      data-testid={fileTestId}
      className={fileClasses}
      style={style ?? undefined}
    >
      <label className='file-label'>
        <input
          data-testid={fileInputTestId}
          className='file-input'
          type='file'
          name='resume'
          onClick={onClick ?? undefined}
        />
        <span className='file-cta'>
          {uploadIcon ? <Icon {...uploadIcon} /> : null}
          <span className='file-label'>{uploadText}</span>
        </span>
        {fileName ? <span className='file-name'>{fileName}</span> : null}
      </label>
    </section>
  )
}

export default File
