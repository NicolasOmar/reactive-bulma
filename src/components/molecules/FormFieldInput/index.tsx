import React, { useMemo } from 'react'
// COMPONENTS
import { Select, Checkbox, RadioButton, TextArea } from '@components/atoms'
import InputControl from '../InputControl'
// TYPES & INTERFACES
import {
  FormFieldHelper,
  FormFieldInputProps,
  FormFieldType,
  InputControlProps
} from '@interfaces/moleculeProps'
import {
  SelectProps,
  CheckBoxProps,
  RadioButtonProps,
  TextAreaProps
} from '@interfaces/atomProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

const renderInputLabel = (labelText?: string, isHorizontal?: boolean) => {
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
}

const renderMemorizedInput = ({
  testId,
  type,
  input
}: Partial<FormFieldInputProps>) => {
  const otherProps = {
    testId: input?.testId ?? testId ?? `test-form-field-${type}`,
    containerTestId: testId ?? `test-form-field-container-${type}`
  }

  switch (type) {
    case FormFieldType.INPUT:
      return (
        <InputControl
          {...(input as InputControlProps)}
          {...otherProps}
        />
      )
    case FormFieldType.SELECT:
      return (
        <Select
          {...(input as SelectProps)}
          {...otherProps}
        />
      )
    case FormFieldType.CHECKBOX:
      return (
        <Checkbox
          {...(input as CheckBoxProps)}
          {...otherProps}
        />
      )
    case FormFieldType.RADIOBUTTON:
      return (
        <RadioButton
          {...(input as RadioButtonProps)}
          {...otherProps}
        />
      )
    case FormFieldType.TEXTAREA:
      return (
        <TextArea
          {...(input as TextAreaProps)}
          {...otherProps}
        />
      )
  }
}

const renderInputHelper = (helperConfig?: FormFieldHelper) => {
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

const FormFieldInput: React.FC<FormFieldInputProps> = ({
  testId = null,
  labelText,
  type,
  input,
  helper,
  isHorizontal
}) => {
  const memorizedLabel = useMemo(
    () => renderInputLabel(labelText, isHorizontal),
    [labelText, isHorizontal]
  )
  const memorizedInput = useMemo(
    () => renderMemorizedInput({ testId: testId ?? undefined, type, input }),
    [testId, type, input]
  )
  const memorizedHelper = useMemo(() => renderInputHelper(helper), [helper])

  return (
    <>
      {memorizedLabel}
      {memorizedInput}
      {memorizedHelper}
    </>
  )
}

export default FormFieldInput
