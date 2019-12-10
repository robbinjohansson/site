const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'robbin.works',
  siteDescription: 'My name is Robbin, I enjoy building great web apps.',
  siteUrl: 'https://robbin.works/',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }
}
