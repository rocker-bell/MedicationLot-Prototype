module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],

  plugins: ["stylelint-order"],

  rules: {
    "order/properties-alphabetical-order": true,
    "string-quotes": "double",

    // If you ever add Tailwind, these lines stay compatible
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen"
        ],
      },
    ]
  },

  ignoreFiles: [
    "dist/**",
    "Documentation/**",
    "ignore/**",
    "public/**",
    "**/*.js",
    "**/*.jsx"
  ]
};
