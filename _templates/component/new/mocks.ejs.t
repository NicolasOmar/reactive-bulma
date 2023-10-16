---
to: <%= fileRoute %>.mocks.json
---
{
  "testing": {
    "basicTestId": "test-<%= underName %>"
  },
  "storybook": {
    "parameters": {
      "componentSubtitle": "Here goes component's subtitle, a base idea about what it does",
      "docs": {
        "description": {
          "component": "Here goes component's techinal description, mostly based on Bulma's documentation."
        }
      }
    }
    
  }
}