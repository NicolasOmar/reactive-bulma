import React from 'react'
// TYPES & INTERFACES
import { SelectProps } from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const Select: React.FC<SelectProps> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  isDisabled,
  options = [],
  selectedValues,
  name,
  showOptions = 1,
  isMultiple = false,
  color = null,
  size = null,
  isRounded = null,
  isHovered = null,
  isFocused = null,
  onClick,
  onChange,
  onBlur
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
        value={selectedValues}
        name={name}
        disabled={isDisabled ?? false}
        multiple={isMultiple}
        size={showOptions}
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map(({ id, name }, i) => (
          <option
            data-testid={`${selectTestId}-option-${i}`}
            key={`key-option-${id.toString()}`}
            value={id.toString()}
          >
            {name}
          </option>
        ))}
      </select>
    </section>
  )
}

export default Select
