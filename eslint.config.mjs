import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      'prettier/prettier': ['error', { singleQuote: true }],
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
    },
  },
];

export default eslintConfig;
