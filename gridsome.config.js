const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');
const isProduction = process.env.NODE_ENV === 'production';

const postcssPlugins = [
  tailwind('./tailwind.config.js'),
  require('postcss-nesting'),
]

if (isProduction) postcssPlugins.push(purgecss());

module.exports = {
  siteName: 'robbin.works',
  siteDescription: 'My name is Robbin, I enjoy building great web apps.',
  siteUrl: 'https://robbin.works/',

  templates: {
    Post: '/:title',
    Tag: '/tag/:title'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
    use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_TRACKING_CODE,
        debug: {
          sendHitTask: isProduction
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
