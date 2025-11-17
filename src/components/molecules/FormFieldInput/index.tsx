import React, { useMemo } from 'react'
// COMPONENTS
import { Select, Checkbox, RadioButton, TextArea } from '@components/atoms'
import InputControl from '../InputControl'
// TYPES & INTERFACES
import {
  FormFieldElement,
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

interface RenderInputProps {
  testId?: string
  element: FormFieldElement | null
  isHorizontal: boolean
}

const renderInput = ({ testId, element, isHorizontal }: RenderInputProps) => {
  if (element === null) return null

  const otherProps = {
    testId:
      element.config?.testId ?? testId ?? `test-form-field-${element.type}`,
    containerTestId: testId ?? `test-form-field-container-${element.type}`
  }

  switch (element.type) {
    case FormFieldType.INPUT:
      return (
        <InputControl
          {...(element.config as InputControlProps)}
          {...otherProps}
          isHorizontal={isHorizontal}
        />
      )
    case FormFieldType.SELECT:
      return (
        <section className='control'>
          <Select
            {...(element.config as SelectProps)}
            {...otherProps}
          />
        </section>
      )
    case FormFieldType.CHECKBOX:
      return (
        <section className='control'>
          <Checkbox
            {...(element.config as CheckBoxProps)}
            {...otherProps}
          />
        </section>
      )
    case FormFieldType.RADIOBUTTON:
      return (
        <section className='control'>
          <RadioButton
            {...(element.config as RadioButtonProps)}
            {...otherProps}
          />
        </section>
      )
    case FormFieldType.TEXTAREA:
      return (
        <section className='control'>
          <TextArea
            {...(element.config as TextAreaProps)}
            {...otherProps}
          />
        </section>
      )
  }
}

const FormFieldInput: React.FC<FormFieldInputProps> = ({
  testId,
  cssClasses = null,
  style = null,
  leftInput = null,
  rightInput = null,
  mainInput,
  withAddons = null,
  isHorizontal = false
}) => {
  const fieldClasses = parseClasses(['field', cssClasses])
  const fieldTestId =
    testId ?? parseTestId({ tag: 'field', parsedClasses: fieldClasses })
  const memorizedMainInput = useMemo(
    () => renderInput({ testId, element: mainInput, isHorizontal }),
    [testId, mainInput, isHorizontal]
  )
  const memoizedLeftInput = useMemo(
    () =>
      withAddons
        ? renderInput({ testId, element: leftInput, isHorizontal })
        : null,
    [testId, leftInput, isHorizontal, withAddons]
  )
  const memoizedRightInput = useMemo(
    () =>
      withAddons
        ? renderInput({ testId, element: rightInput, isHorizontal })
        : null,
    [testId, rightInput, isHorizontal, withAddons]
  )

  return (
    <section
      data-testid={fieldTestId}
      className={fieldClasses}
      style={style ?? undefined}
    >
      {memoizedLeftInput}
      {memorizedMainInput}
      {memoizedRightInput}
    </section>
  )
}

export default FormFieldInput
