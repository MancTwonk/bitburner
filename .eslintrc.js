module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true, "parser": "flow" }],
    "import/prefer-default-export": 0,
    "no-await-in-loop": 0,
    "react/jsx-filename-extension": 0,
  },
};
