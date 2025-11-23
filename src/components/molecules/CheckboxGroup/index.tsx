import React, { useMemo } from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { CheckboxGroupProps } from '@interfaces/moleculeProps'
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'
import { Checkbox } from '@components/atoms'
import { generateKey } from '@functions/generators'

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  testId = null,
  cssClasses = null,
  style = null,
  listOfCheckboxes
}) => {
  const checkboxGroupClasses = parseClasses(['checkboxes', cssClasses])
  const checkboxGroupTestId =
    testId ??
    parseTestId({ tag: 'checkboxes', parsedClasses: checkboxGroupClasses })

  const memoizedCheckboxes = useMemo(
    () =>
      listOfCheckboxes.map(_checkboxConfig => (
        <Checkbox
          key={`checkbox-item-${generateKey()}`}
          {..._checkboxConfig}
        />
      )),
    [listOfCheckboxes]
  )

  return (
    <section
      data-testid={checkboxGroupTestId}
      className={checkboxGroupClasses}
      style={style ?? undefined}
    >
      {memoizedCheckboxes}
    </section>
  )
}

export default CheckboxGroup
