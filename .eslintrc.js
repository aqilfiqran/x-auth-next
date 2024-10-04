module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },

  plugins: ['@typescript-eslint', 'jest', 'check-file'],

  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],

  rules: {
    'react/react-in-jsx-scope': 'off', // React is always in scope with Next.js
    'react/prop-types': 'off', // TypeScript takes care of prop types
    // check-file rules
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/components/**/!(*index|*types|*consts).{ts,tsx}': 'PASCAL_CASE', // PascalCase for components
        '**/(lib|types)/**/*.{ts,tsx}': 'KEBAB_CASE', // kebab-case for lib and types
        '**/app/*(!(*_components))/*.{ts,tsx}': 'KEBAB_CASE', // kebab-case for app files except for _components
        '**/hooks/**/*.{ts,tsx}': 'CAMEL_CASE', // camelCase for hooks
        '__tests__/**/*.{ts,tsx}': 'KEBAB_CASE', // kebab-case for test files
      },
      {
        // ignore the middle extensions of the filename to support filename like bable.config.js or smoke.spec.ts
        ignoreMiddleExtensions: true,
      },
    ],
    // error when using unused variables
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all', // check all arguments
        argsIgnorePattern: '^_', // ignore arguments that start with _
        caughtErrors: 'all', // check all caught errors
        caughtErrorsIgnorePattern: '^_', // ignore caught errors that start with _
        destructuredArrayIgnorePattern: '^_', // ignore destructured arrays that start with _
        varsIgnorePattern: '^_', // ignore variables that start with _
        ignoreRestSiblings: true, // ignore rest siblings
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error', // error when using any
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ], // error when using jsx in non jsx files
    'react/jsx-props-no-spreading': 'off', // allow spreading props
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ], // error importing without extensions
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ], // error next/link without href
    'no-nested-ternary': 'off', // allow nested ternary
    'import/prefer-default-export': 'off', // allow named exports
    'import/no-extraneous-dependencies': 'off', // allow devDependencies
    'react/require-default-props': 'off', // allow not having default props
    'react/no-array-index-key': 'off', // allow using array index as key
    'jsx-a11y/click-events-have-key-events': 'off', // allow click events without key events
    'security/detect-object-injection': 'off', // allow object injection
    'sonarjs/no-nested-template-literals': 'off', // allow nested template literals
    'jsx-a11y/no-static-element-interactions': 'off', // allow static element interactions
  },
};
