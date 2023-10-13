---
to: src/components/molecules/<%= name %>/index.tsx
---
<%
  CamelName = h.inflection.camelize(name, false)
  UnderName = h.inflection.underscore(name, false)
%>
import React from 'react'
// TYPES & INTERFACES
import { <%= CamelName %>Props } from '../../../interfaces/moleculeProps'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const <%= CamelName %>: React.FC<<%= CamelName %>Props> = ({
  testId = 'test-<%= UnderName %>',
  cssClasses = null,
  style = null
}) => {
  const <%= UnderName %>Classes = parseClasses([
    '<%= UnderName %>',
    null,
    cssClasses
  ])
  const <%= UnderName %>TestId =
    testId ?? parseTestId({ tag: '<%= name %>', parsedClasses: <%= UnderName %>Classes })

  return (
    <section
      data-testid={<%= UnderName %>TestId}
      className={<%= UnderName %>Classes}
      style={style ?? undefined}
    >
      {'Hello There'}
    </section>
  )
}

export default <%= CamelName %>
