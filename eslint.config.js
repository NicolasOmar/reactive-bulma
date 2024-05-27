// eslint.config.js
const { fixupConfigRules } = require("@eslint/compat");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const flatCompat = new FlatCompat({
  recommendedConfig: js.configs.recommended
});

module.exports = [
  ...fixupConfigRules(
    flatCompat.extends(".eslintrc")
  )
];