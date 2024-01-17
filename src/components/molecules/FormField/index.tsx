import React from 'react'
// COMPONENTS
import InputControl from '../InputControl'
// TYPES & INTERFACES
import {
  FormFieldHelperProps,
  FormFieldProps
} from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const renderFieldLabel = (labelText: string | null) =>
  labelText ? (
    <label
      data-testid={'label-test'}
      className='label'
    >
      {labelText}
    </label>
  ) : null

const renderFieldHelper = (helperConfig: FormFieldHelperProps | null) => {
  if (helperConfig === null || helperConfig === undefined) return null

  const fieldHelperClasses = parseClasses(['help', helperConfig.color])
  const fieldHelperTestId = parseTestId({
    tag: 'help',
    parsedClasses: fieldHelperClasses
  })

  return (
    <p
      data-testid={fieldHelperTestId}
      className={fieldHelperClasses}
    >
      {helperConfig.text}
    </p>
  )
}

const FormField: React.FC<FormFieldProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  labelText = null,
  inputControlConfig,
  helperConfig = null,
  isHorizontal = false
}) => {
  const formFieldClasses = parseClasses([
    'field',
    isHorizontal ? 'is-horizontal' : null,
    cssClasses
  ])
  const formFieldTestId =
    testId ?? parseTestId({ tag: 'field', parsedClasses: formFieldClasses })

  if (inputControlConfig?.inputConfig?.color) {
    helperConfig = {
      ...helperConfig,
      color: inputControlConfig.inputConfig.color
    }
  }

  return (
    <section
      data-testid={formFieldTestId}
      className={formFieldClasses}
      style={style ?? undefined}
    >
      {renderFieldLabel(labelText)}
      <InputControl {...inputControlConfig} />
      {renderFieldHelper(helperConfig)}
    </section>
  )
}

export default FormField
