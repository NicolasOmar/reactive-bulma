---
to: src/components/<%= fullRoute %>/index.tsx
---
import React from 'react'
// TYPES & INTERFACES
import { <%= name %>Props } from '../../../interfaces/<%= route %>Props'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const <%= name %>: React.FC<<%= name %>Props> = ({
  testId = 'test-<%= underName %>',
  cssClasses = null,
  style = null
}) => {
  const <%= underName %>Classes = parseClasses([
    '<%= underName %>',
    null,
    cssClasses
  ])
  const <%= underName %>TestId =
    testId ?? parseTestId({ tag: '<%= name %>', parsedClasses: <%= underName %>Classes })

  return (
    <section
      data-testid={<%= underName %>TestId}
      className={<%= underName %>Classes}
      style={style ?? undefined}
    >
      {'Hello There'}
    </section>
  )
}

export default <%= name %>
