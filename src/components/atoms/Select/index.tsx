import React from 'react'
// TYPES & INTERFACES
import { SelectProps } from '../../../interfaces/atomProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const Select: React.FC<SelectProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  options = [],
  showOptions = 1,
  isMultiple = false,
  color = null,
  size = null,
  isRounded = null,
  isHovered = null,
  isFocused = null,
  onClick = null
}) => {
  const containerSelectClasses = parseClasses([
    'select',
    color,
    size,
    isMultiple ? 'is-multiple' : null,
    isRounded ? 'is-rounded' : null,
    isHovered ? 'is-hovered' : null,
    isFocused ? 'is-focused' : null,
    containerCssClasses
  ])
  const selectTestId =
    testId ??
    parseTestId({
      tag: 'select',
      parsedClasses: containerSelectClasses
    })
  const containerSelectTestId = containerTestId ?? `${selectTestId}-container`

  return (
    <section
      data-testid={containerSelectTestId}
      className={containerSelectClasses}
      style={containerStyle ?? undefined}
    >
      <select
        data-testid={selectTestId}
        className={cssClasses ?? undefined}
        style={style ?? undefined}
        multiple={isMultiple}
        size={showOptions}
      >
        {options.map(({ id, name, selected }, i) => (
          <option
            data-testid={`${selectTestId}-option-${i}`}
            key={id.toString()}
            selected={selected ?? false}
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
