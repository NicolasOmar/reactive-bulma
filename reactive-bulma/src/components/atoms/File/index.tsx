import React from 'react'
// COMPONENTS
import Icon from '../Icon'
// TYPES & INTERFACES
import { FileProps } from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const File: React.FC<FileProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  fileName = null,
  uploadIcon = { iconLabel: 'upload' },
  uploadText = 'Choose a file…',
  buttonOnRight = false,
  isFullWidth = false,
  isBoxed = false,
  color = null,
  size = null,
  onClick = null
}) => {
  const fileContainerClasses = parseClasses([
    'file',
    fileName ? 'has-name' : null,
    buttonOnRight ? 'is-right' : null,
    isFullWidth ? 'is-fullwidth' : null,
    isBoxed ? 'is-boxed' : null,
    color,
    size,
    containerCssClasses
  ])
  const fileContainerTestId =
    containerTestId ??
    parseTestId({
      tag: 'file',
      parsedClasses: fileContainerClasses,
      rules: [
        {
          regExp: /has/gm,
          replacer: '-has'
        },
        {
          regExp: /is|file/gm,
          replacer: ''
        }
      ]
    })
  const fileInputClasses = cssClasses ?? 'file-input'
  const fileInputTestId = testId ?? `${fileContainerTestId}-input`

  return (
    <section
      data-testid={fileContainerTestId}
      className={fileContainerClasses}
      style={containerStyle ?? undefined}
    >
      <label className='file-label'>
        <input
          data-testid={fileInputTestId}
          type='file'
          name='resume'
          className={fileInputClasses}
          style={style ?? undefined}
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
