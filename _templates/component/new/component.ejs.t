---
to: <%= fileRoute %>.tsx
---
import React from 'react'
// COMPONENTS
// TYPES & INTERFACES
import { <%= name %>Props } from '@interfaces/<%= route %>Props'
// CONSTANTS
// FUNCTIONS
import { parseClasses, parseTestId } from '@functions/parsers'

<% if(isSimple){ %>
const <%= name %>: React.FC<<%= name %>Props> = ({
  testId = null,
  cssClasses = null,
  style = null,
  <%= testStylingPropName %> = null
}) => {
  const <%= underName %>BaseClass = '<%= underName %>'
  const <%= underName %>Classes = parseClasses([
    <%= underName %>BaseClass,
    <%= testStylingPropName %> ? '<%= testStylingPropValue %>' : null,
    cssClasses
  ])
  const <%= underName %>TestId =
    testId ?? parseTestId({
      tag: <%= underName %>BaseClass,
      parsedClasses: <%= underName %>Classes
    })

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
<% } else { %>
const <%= name %>: React.FC<<%= name %>Props> = ({
  testId = null,
  containerTestId = null,
  cssClasses = null,
  containerCssClasses = null,
  style = null,
  containerStyle = null,
  <%= testStylingPropName %> = null
}) => {
  const <%= underName %>ContainerClasses = parseClasses([
    '<%= underName %>-container',
    null,
    containerCssClasses
  ])
  const <%= underName %>Classes = parseClasses([
    '<%= underName %>',
    <%= testStylingPropName %> ? '<%= testStylingPropValue %>' : null,
    cssClasses
  ])
  const <%= underName %>ContainerTestId =
    containerTestId ?? parseTestId({ tag: '<%= underName %>-container', parsedClasses: <%= underName %>ContainerClasses })
  const <%= underName %>TestId =
    testId ?? parseTestId({ tag: '<%= underName %>', parsedClasses: <%= underName %>Classes })

  return (
    <section
      data-testid={<%= underName %>ContainerTestId}
      className={<%= underName %>ContainerClasses}
      style={containerStyle ?? undefined}
    >
      <section
        data-testid={<%= underName %>TestId}
        className={<%= underName %>Classes}
        style={style ?? undefined}
      >
        {'Hello There, you are looking a [<%= name %>] component located at [<%= fileRoute %>.tsx]'}
      </section>
    </section>
  )
}

export default <%= name %>
<% } %>

