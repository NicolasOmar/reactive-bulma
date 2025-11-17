import React, { useMemo } from 'react'
// COMPONENTS
import {
  Select,
  Checkbox,
  RadioButton,
  TextArea,
  Button
} from '@components/atoms'
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
  TextAreaProps,
  ButtonProps
} from '@interfaces/atomProps'
// FUNCTIONS

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
    case FormFieldType.BUTTON:
      return (
        <section className='control'>
          <Button
            {...(element.config as ButtonProps)}
            {...otherProps}
          />
        </section>
      )
    default:
      return null
  }
}

const FormFieldInput: React.FC<FormFieldInputProps> = ({
  testId,
  mainInput,
  leftInput = null,
  rightInput = null,
  isHorizontal = false
}) => {
  const memorizedMainInput = useMemo(
    () => renderInput({ testId, element: mainInput, isHorizontal }),
    [testId, mainInput, isHorizontal]
  )
  const memoizedLeftInput = useMemo(
    () => renderInput({ testId, element: leftInput, isHorizontal }),
    [testId, leftInput, isHorizontal]
  )
  const memoizedRightInput = useMemo(
    () => renderInput({ testId, element: rightInput, isHorizontal }),
    [testId, rightInput, isHorizontal]
  )

  return (
    <>
      {memoizedLeftInput}
      {memorizedMainInput}
      {memoizedRightInput}
    </>
  )
}

export default FormFieldInput
