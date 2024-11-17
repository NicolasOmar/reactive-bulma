---
to: <%= fileRoute %>.mocks.json
---
{
  "testing": {
    "basicTestId": "test-<%= underName %>",
    "testClasses": [
      {
        "name": "<%= testStylingPropName %>",
        "value": true,
        "result": "<%= testStylingPropValue %>"
      }
    ]
  },
  "storybook": {
    "parameters": {
      "componentSubtitle": "Here goes component's subtitle, a base idea about what it does",
      "docs": {
        "description": {
          "component": "Here goes component's technical description, mostly based on Bulma's documentation."
        }
      }
    }
  }
}