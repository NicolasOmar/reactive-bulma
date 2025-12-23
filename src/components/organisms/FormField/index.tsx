import React, { useMemo } from 'react'
// COMPONENTS
import FormFieldInput from '@components/molecules/FormFieldInput'
// TYPES & INTERFACES
import { FormFieldProps } from '@interfaces/organismProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { generateKey } from '@functions/generators'

const FormField: React.FC<FormFieldProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  inputsConfig,
  isHorizontal = false,
  isGrouped = false,
  withAddons = false
}) => {
  const formFieldClasses = parseClasses([
    'field',
    isHorizontal ? 'is-horizontal' : null,
    isGrouped ? 'is-grouped' : null,
    withAddons ? 'has-addons' : null,
    cssClasses
  ])
  const formFieldTestId =
    testId ?? parseTestId({ tag: 'field', parsedClasses: formFieldClasses })

  const memorizedFormInput = useMemo(() => {
    if (isGrouped) {
      return Array.isArray(inputsConfig) ? (
        inputsConfig.map((_singleConfig, i) => {
          const fieldBodyKey = `grouped-input-control-body-${generateKey()}`
          return (
            <FormFieldInput
              key={fieldBodyKey}
              {..._singleConfig}
              isHorizontal={_singleConfig.isHorizontal ?? isHorizontal}
              testId={_singleConfig.testId ?? `test-grouped-input-control-${i}`}
            />
          )
        })
      ) : (
        <FormFieldInput
          key={`input-control-body-${generateKey()}`}
          {...inputsConfig}
          isHorizontal={inputsConfig.isHorizontal ?? isHorizontal}
        />
      )
    } else {
      const parsedFieldInputConfig = Array.isArray(inputsConfig)
        ? null
        : {
            ...inputsConfig,
            isHorizontal: inputsConfig.isHorizontal ?? isHorizontal
          }
      return parsedFieldInputConfig !== null ? (
        <FormFieldInput {...parsedFieldInputConfig} />
      ) : null
    }
  }, [inputsConfig, isGrouped, isHorizontal])

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
