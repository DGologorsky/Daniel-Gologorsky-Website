// next.config.js
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,  // <-- Add this line
  },
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
};
