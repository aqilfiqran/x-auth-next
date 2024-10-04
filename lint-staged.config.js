// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import('lint-staged').ConfigFn} */
const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

/** @type {import('lint-staged').Config} */
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
