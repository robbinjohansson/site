const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');

const postcssPlugins = [
  tailwind('./tailwind.config.js'),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

module.exports = {
  siteName: 'robbin.works',
  siteDescription: 'My name is Robbin, I enjoy building great web apps.',
  siteUrl: 'https://robbin.works/',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
