import React from 'react'
import { SelectProps } from '../../../interfaces/atomProps'
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Select: React.FC<SelectProps> = ({
  testId = null,
  showOptions = 3,
  options = [],
  isMultiple = false,
  color = null,
  size = null,
  isRounded = null,
  isHovered = null,
  isFocused = null,
  onClick = null
}) => {
  const selectClasses = parseClasses([
    'select',
    color,
    size,
    isMultiple ? 'is-multiple' : null,
    isRounded ? 'is-rounded' : null,
    isHovered ? 'is-hovered' : null,
    isFocused ? 'is-focused' : null
  ])
  const selectTestId =
    testId ??
    parseTestId({
      tag: 'select',
      parsedClasses: selectClasses
    })

  return (
    <section
      data-testid={`${selectTestId}-container`}
      className={selectClasses}
    >
      <select
        multiple={isMultiple}
        size={showOptions}
        data-testid={selectTestId}
      >
        {options.map(({ id, name }, i) => (
          <option
            data-testid={`${selectTestId}-option-${i}`}
            key={id.toString()}
            onClick={onClick ?? undefined}
          >
            {name}
          </option>
        ))}
      </select>
    </section>
  )
}

export default Select
