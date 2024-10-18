module.exports = {
  extends: ["expo", "plugin:tailwindcss/recommended", "prettier"],
  plugins: [
    "@typescript-eslint",
    "unused-imports",
    "tailwindcss",
    "simple-import-sort",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "max-params": ["error", 3],
    "max-lines-per-function": ["error", 70],
    "react/display-name": "off",
    "react/no-inline-styles": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/comma-dangle": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": ["error", { maxDepth: "∞" }],
    "tailwindcss/classnames-order": [
      "warn",
      {
        officialSorting: true,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "tailwindcss/no-custom-classname": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  "env": {
    "node": true
},
};
