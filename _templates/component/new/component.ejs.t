---
to: <%= fileRoute %>.tsx
---
import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { <%= name %>Props } from '../../../interfaces/<%= route %>Props'
// PARSERS
import { parseClasses, parseTestId } from '../../../functions/parsers'

const <%= name %>: React.FC<<%= name %>Props> = ({
  testId = null,
  cssClasses = null,
  <%= testStylingPropName %> = null,
  style = null
}) => {
  const <%= underName %>Classes = parseClasses([
    '<%= underName %>',
    <%= testStylingPropName %> ? '<%= testStylingPropValue %>' : null,
    cssClasses
  ])
  const <%= underName %>TestId =
    testId ?? parseTestId({ tag: '<%= underName %>', parsedClasses: <%= underName %>Classes })

  return (
    <section
      data-testid={<%= underName %>TestId}
      className={<%= underName %>Classes}
      style={style ?? undefined}
    >
      {'Hello There, you are looking a [<%= name %>] component located at [<%= fileRoute %>.tsx]'}
    </section>
  )
}

export default <%= name %>
