---
to: src/interfaces/<%= route %>Props.ts
inject: true
append: true
after: 
---
<%= %>
export interface <%= name %>Props extends ElementProps {
  /** `Mocked` Styling prop injected for component creation process purposes only. Can be deleted */
  <%= testStylingPropName %>?: boolean
}