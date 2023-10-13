---
to: src/components/molecules/<%= name %>/index.mocks.json
---
{
  "testing": {
    "basicTestId": "test-<%= h.inflection.underscore(name, false) %>"
  },
  "storybook": {
    
  }
}