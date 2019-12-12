import './assets/scss/app.scss';
import './assets/scss/_prism.scss';

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'en', class: 'bg-white antialiased' }

  head.bodyAttrs = { class: 'font-sans text-lg font-normal tracking-tight leading-relaxed text-black' }
}
