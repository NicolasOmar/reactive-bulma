import React, { useMemo } from 'react'
// COMPONENTS
import FormFieldInput from '../../molecules/FormFieldInput'
// TYPES & INTERFACES
import { FormFieldInputProps } from '../../../interfaces/moleculeProps'
import { FormFieldProps } from '../../../interfaces/organismProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '../../../functions/parsers'
import { generateKey } from '../../../functions/generators'

const memoizeFormFieldInput = (
  inputConfig: FormFieldInputProps | FormFieldInputProps[],
  isGrouped: boolean,
  isHorizontal: boolean
) => {
  const fieldBodyKey = isGrouped
    ? `grouped-input-control-body-${generateKey()}`
    : `input-control-body-${generateKey()}`

  if (isGrouped) {
    return Array.isArray(inputConfig) ? (
      inputConfig.map((_singleConfig, i) => {
        const parsedSingleConfig = {
          ..._singleConfig,
          isHorizontal: _singleConfig.isHorizontal ?? isHorizontal,
          testId: `test-grouped-input-control-${i}`
        }
        return (
          <FormFieldInput
            key={fieldBodyKey}
            {...parsedSingleConfig}
          />
        )
      })
    ) : (
      <FormFieldInput
        labelText={inputConfig.labelText}
        input={inputConfig.input}
        type={inputConfig.type}
        helper={inputConfig.helper}
        isHorizontal={inputConfig.isHorizontal ?? isHorizontal}
      />
    )
  } else {
    const parsedFieldInputConfig = Array.isArray(inputConfig)
      ? null
      : {
          ...inputConfig,
          isHorizontal: inputConfig.isHorizontal ?? isHorizontal
        }
    return parsedFieldInputConfig !== null ? (
      <FormFieldInput {...parsedFieldInputConfig} />
    ) : null
  }
}

const FormField: React.FC<FormFieldProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  config,
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

  const memorizedFormInput = useMemo(
    () => memoizeFormFieldInput(config, isGrouped, isHorizontal),
    [config, isGrouped, isHorizontal]
  )

  return (
    <section
      data-testid={formFieldTestId}
      className={formFieldClasses}
      style={style ?? undefined}
    >
      {isHorizontal ? (
        <section className='field-body'>{memorizedFormInput}</section>
      ) : (
        memorizedFormInput
      )}
    </section>
  )
}

export default FormField
