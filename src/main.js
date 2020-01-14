import './assets/css/app.css';
import './assets/css/_prism.css';

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'en', class: 'bg-white antialiased' }

  head.bodyAttrs = { class: 'font-sans text-lg font-normal tracking-tight leading-relaxed text-black' }

  Vue.mixin({
    methods: {
      getUrlHostname: str => new URL(str).hostname
    }
  })
};
