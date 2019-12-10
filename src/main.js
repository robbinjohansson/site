import './assets/css/app.css';
import './assets/css/_prism.css';

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'en', class: 'bg-white antialiased' }

  head.bodyAttrs = { class: 'font-sans text-base font-normal tracking-tight leading-snug text-gray-800' }
}
