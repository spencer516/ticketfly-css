const postcss = require('postcss');

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'cssstats',
    'postcss-discard-comments',
    'postcss-remove-root',
    'autoprefixer',
    'postcss-reporter'
  ],
  input: 'src/ticketfly-css.css',
  dir: 'dist'
};
