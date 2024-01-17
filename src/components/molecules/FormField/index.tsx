import React from 'react'
// COMPONENTS
import InputControl from '../InputControl'
// TYPES & INTERFACES
import {
  FormFieldHelperProps,
  FormFieldProps,
  InputControlProps
} from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseKey, parseTestId } from '../../../functions/parsers'

const renderFieldLabel = (labelText: string | null) =>
  labelText ? (
    <label
      data-testid={'test-form-field-label'}
      className='label'
    >
      {labelText}
    </label>
  ) : null

const renderFieldBody = (
  inputControlConfig: InputControlProps | InputControlProps[]
) => {
  return Array.isArray(inputControlConfig) ? (
    inputControlConfig.map((_singleConfig, i) => (
      <InputControl
        key={`grouped-input-control-${parseKey()}`}
        testId={`test-grouped-input-control-${i}`}
        {..._singleConfig}
      />
    ))
  ) : (
    <InputControl {...inputControlConfig} />
  )
}

const renderFieldHelper = (helperConfig: FormFieldHelperProps | null) => {
  if (!helperConfig) return null

  const fieldHelperClasses = parseClasses(['help', helperConfig.color])
  const fieldHelperTestId = parseTestId({
    tag: 'form-field-help',
    parsedClasses: fieldHelperClasses,
    rules: [{ regExp: /help|is/gm, replacer: '' }]
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
  isHorizontal = false,
  isGrouped = false
}) => {
  const formFieldClasses = parseClasses([
    'field',
    isHorizontal ? 'is-horizontal' : null,
    isGrouped ? 'is-grouped' : null,
    cssClasses
  ])
  const formFieldTestId =
    testId ?? parseTestId({ tag: 'field', parsedClasses: formFieldClasses })

  if (
    !isGrouped &&
    (inputControlConfig as InputControlProps)?.inputConfig?.color
  ) {
    helperConfig = {
      ...helperConfig,
      color: (inputControlConfig as InputControlProps).inputConfig.color
    }
  }

  return (
    <section
      data-testid={formFieldTestId}
      className={formFieldClasses}
      style={style ?? undefined}
    >
      {renderFieldLabel(labelText)}
      {renderFieldBody(inputControlConfig)}
      {renderFieldHelper(helperConfig)}
    </section>
  )
}

export default FormField
