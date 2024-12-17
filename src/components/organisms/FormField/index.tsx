import React, { useMemo } from 'react'
// COMPONENTS
import InputControl from '../../molecules/InputControl'
import { Checkbox, RadioButton, Select, TextArea } from '../../atoms'
// TYPES & INTERFACES
import { InputControlProps } from '../../../interfaces/moleculeProps'
import {
  FormFieldHelper,
  FormFieldType,
  FormFieldProps,
  FormFieldInputProps
} from '../../../interfaces/organismProps'
import {
  CheckBoxProps,
  RadioButtonProps,
  SelectProps,
  TextAreaProps
} from '../../../interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const renderFieldHelper = (helperConfig?: FormFieldHelper) => {
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

const renderInputConfig = (
  inputConfig: FormFieldInputProps,
  key?: string,
  testId?: string
) => {
  const otherProps = { key, testId }

  switch (inputConfig.type) {
    case FormFieldType.INPUT:
      return (
        <>
          <InputControl
            {...(inputConfig.config as InputControlProps)}
            {...otherProps}
          />
          {renderFieldHelper(inputConfig.helper)}
        </>
      )
    case FormFieldType.SELECT:
      return (
        <>
          <Select
            {...(inputConfig.config as SelectProps)}
            {...otherProps}
          />
          {renderFieldHelper(inputConfig.helper)}
        </>
      )
    case FormFieldType.CHECKBOX:
      return (
        <>
          <Checkbox
            {...(inputConfig.config as CheckBoxProps)}
            {...otherProps}
          />
          {renderFieldHelper(inputConfig.helper)}
        </>
      )
    case FormFieldType.RADIOBUTTON:
      return (
        <>
          <RadioButton
            {...(inputConfig.config as RadioButtonProps)}
            {...otherProps}
          />
          {renderFieldHelper(inputConfig.helper)}
        </>
      )
    case FormFieldType.TEXTAREA:
      return (
        <>
          <TextArea
            {...(inputConfig.config as TextAreaProps)}
            {...otherProps}
          />
          {renderFieldHelper(inputConfig.helper)}
        </>
      )
    default:
      return null
  }
}

const renderFieldBody = (
  inputConfig: FormFieldInputProps | FormFieldInputProps[],
  isGrouped: boolean
) => {
  if (isGrouped) {
    return Array.isArray(inputConfig)
      ? inputConfig.map((_singleConfig, i) =>
          renderInputConfig(
            _singleConfig,
            `grouped-input-control-${generateKey()}`,
            `test-grouped-input-control-${i}`
          )
        )
      : renderInputConfig(inputConfig)
  } else {
    return Array.isArray(inputConfig)
      ? renderInputConfig(inputConfig[0])
      : renderInputConfig(inputConfig)
  }
}

const FormField: React.FC<FormFieldProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  labelText = null,
  inputControlConfig,
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

  const fieldLabelSection = useMemo(() => {
    const labelSection =
      labelText !== null ? (
        <label
          data-testid={`test-form-field-label`}
          className='label'
        >
          {labelText}
        </label>
      ) : null

    return isHorizontal ? (
      <section className='field-label'>{labelSection}</section>
    ) : (
      labelSection
    )
  }, [isHorizontal, labelText])

  const fieldBodySection = useMemo(() => {
    const fieldInput = renderFieldBody(inputControlConfig, isGrouped)

    return isHorizontal ? (
      <section className='field-body'>{fieldInput}</section>
    ) : (
      <>{fieldInput}</>
    )
  }, [isHorizontal, inputControlConfig, isGrouped])

  return (
    <section
      data-testid={formFieldTestId}
      className={formFieldClasses}
      style={style ?? undefined}
    >
      {fieldLabelSection}
      {fieldBodySection}
    </section>
  )
}

export default FormField
