<template>
  <div>
    <div class="markdown">
      <h1>About</h1>
      <p>I'm a web developer from Sweden who enjoys developing great web applications – my go-to tech stack currently is Laravel, Vue.js and Tailwindcss.</p>

      <p>Occasionally I will share neat tips and tricks related to my day-to-day work, mostly as a way to keep notes for my future self. Hopefully these notes can be of value to other fellow devs as well.</p>

      <g-image src="~/assets/images/about1200x630@2x.jpg" alt="Robbin Johansson" />

      <p>☝🏻 Photo taken by <a href="http://github.com/johanlinander" target="_blank" rel="nofollow noopener noreferrer">@johanlinander.</a> It's a few years old but it was the best I could find, it was either that or a random image of a cat.</p>

      <p>This website is built with Vue.js / Gridsome, Tailwindcss and Purgecss. Deployed with ease using Netlify. Full source code is open source and available over at <a href="https://github.com/robbinworks/site" target="_blank" rel="nofollow noopener noreferrer">GitHub.</a></p>

      <p>If you'd like to contact me, feel free to message me at <a :href="`mailto:${$page.metadata.author.email}`">{{ $page.metadata.author.email }}</a> or <a :href="$page.metadata.author.twitter" target="_blank" rel="nofollow noopener noreferrer">Twitter.</a></p>

    </div>

    <span>👨🏻‍💻</span><p class="inline-block mt-12 italic text-base">~ {{ $page.metadata.author.name }}</p>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<page-query>
  query {
    metadata {
      author {
        name
        email
        twitter
      }
    }
}
</page-query>
