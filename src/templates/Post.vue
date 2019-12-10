<template>
    <div class="mt-5">
      <h1 class="text-lg font-bold mb-2">{{ $page.post.title }}</h1>
      <g-link class="text-sm font-bold text-blue-500" v-for="tag in $page.post.tags" :key="tag.id" :to="tag.path">
        #{{ tag.title }}
      </g-link>
      <p class="italic mb-5 pb-5 border-b">{{ $page.post.intro }}</p>

      <div v-html="$page.post.content"></div>
    </div>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.intro
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    intro
    content
  }
}
</page-query>
