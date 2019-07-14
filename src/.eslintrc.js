module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-filename-extension': 0
  },
  settings: {
    react: {
      version: 'latest'
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      }
    }
  },
  globals: {
    PROD: 'readonly'
  }
};
