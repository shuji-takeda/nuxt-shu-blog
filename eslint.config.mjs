import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  // Your custom configs here
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": "off",
  },
});
