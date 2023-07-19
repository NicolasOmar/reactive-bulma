import React from 'react'
// COMPONENTS
import Icon from '../Icon'
// TYPES & INTERFACES
import { FileProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const File: React.FC<FileProps> = ({
  testId = null,
  containerTestId = null,
  fileName = null,
  uploadIcon = { iconLabel: 'upload' },
  uploadText = 'Choose a file…',
  style = null,
  containerStyle = null,
  cssClasses = null,
  containerCssClasses = null,
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
          usedRegExp: /has/gm,
          regExpReplacer: '-has'
        },
        {
          usedRegExp: /is|file/gm,
          regExpReplacer: ''
        }
      ]
    })
  const fileClasses = cssClasses ?? 'file-input'
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
          className={fileClasses}
          style={style ?? undefined}
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
