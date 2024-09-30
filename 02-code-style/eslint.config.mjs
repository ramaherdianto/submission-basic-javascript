import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    rules: {
      'prefer-const': 'error',
    },
    languageOptions: { globals: globals.node },
  },
  pluginJs.configs.recommended,
];