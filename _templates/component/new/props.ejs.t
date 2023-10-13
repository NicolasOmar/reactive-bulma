---
inject: true
to: src/interfaces/moleculeProps.ts
append: true
---
<%
  CamelName = h.inflection.camelize(name, false)
%>
export interface <%= CamelName %>Props extends ElementProps {
}