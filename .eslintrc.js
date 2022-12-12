module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: { project: ['./tsconfig.json'] },
    plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier', 'simple-import-sort', 'jest'],
    extends: [
        'universe/native',
        'universe/web',
        'eslint:all',
        'plugin:@typescript-eslint/all',
        'plugin:react/all',
        'plugin:react-native/all',
        'plugin:jest/all',
        'prettier',
    ],
    ignorePatterns: ['build'],
    rules: {
        '@typescript-eslint/array-type': [2, { default: 'generic' }],
        '@typescript-eslint/init-declarations': 0, // Worsens the structure
        '@typescript-eslint/lines-between-class-members': 0, // Worsens the structure
        '@typescript-eslint/no-confusing-void-expression': [2, { ignoreArrowShorthand: true }],
        '@typescript-eslint/no-empty-interface': 0, // Worsens the structure
        '@typescript-eslint/no-magic-numbers': 0, // Worsens the structure
        'capitalized-comments': 0, // Worsens the structure
        'jest/require-hook': 0, // Error prone
        'line-comment-position': 0, // Worsens the structure
        'max-lines-per-function': 0, // Worsens the structure
        'no-inline-comments': 0, // Worsens the structure
        'no-magic-numbers': 0, // Worsens the structure
        'no-ternary': 0, // Worsens the structure
        'no-undefined': 0, // Sometimes necessary
        'one-var': 0, // Worsens the structure
        'react/forbid-component-props': 0, // Not valid for React Native, because we want to use the style prop
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        'react/jsx-filename-extension': 0, // We use tsx files
        'react/jsx-max-depth': 0, // As long as the file remains uncluttered, this limitation only encourages more complex structures
        'react/jsx-no-literals': 0, // It is just more complicated to read
        'react/jsx-props-no-spreading': 0, // Easier to write
        'simple-import-sort/exports': 2, // Enabling the plugin simple-import-sort
        'simple-import-sort/imports': 2, // Enabling the plugin simple-import-sort
        'sort-imports': 0, // We already use the simple-import-sort plugin

        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/no-type-alias': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        'jest/no-commented-out-tests': 0,
        'jest/prefer-expect-assertions': 0,
        'max-lines': 0,
        'max-params': 0,
        'multiline-comment-style': 0,
        'no-param-reassign': 0,
        'no-warning-comments': 0,
    },
};
