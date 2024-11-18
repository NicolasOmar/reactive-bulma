---
to: src/components/<%= route %>s/index.ts
inject: true
append: true
---
export { default as <%= name %> } from './<%= name %>'