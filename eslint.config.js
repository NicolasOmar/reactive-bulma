// eslint.config.js
import { fixupConfigRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"

const flatCompat = new FlatCompat({
  recommendedConfig: js.configs.recommended
});

export default [
  ...fixupConfigRules(
    flatCompat.extends(".eslintrc")
  )
];