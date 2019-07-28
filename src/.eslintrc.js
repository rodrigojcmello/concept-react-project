module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint", "prettier", "react", "only-warn"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "max-lines": 1, // default 300 lines
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "prettier/prettier": [1, { singleQuote: true }]
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  globals: {
    PROD: "readonly"
  }
};
