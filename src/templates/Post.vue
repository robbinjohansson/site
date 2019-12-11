
<template>
    <div>

      <h1 class="mb-1" v-html="$page.post.title"></h1>

      <!-- <g-link class="text-sm font-bold text-blue-500" v-for="tag in $page.post.tags" :key="tag.id" :to="tag.path">
        #{{ tag.title }}
      </g-link> -->

      <div class="text-sm text-gray-600 mt-1 mb-6">
        <span>{{ $page.post.date }} | {{ $page.post.timeToRead }} min read</span>
      </div>

      <div class="markdown pb-12 mb-12 md:pb-16 md:mb-16 border-b">
        <g-image v-if="$page.post.featured_image" :src="$page.post.featured_image" :alt="$page.post.title" />

        <div v-html="$page.post.content"></div>

        <span>👨🏻‍💻</span><p class="inline-block mt-12 italic text-base">~ Robbin</p>
      </div>

      <g-link
        v-for="(tag, index) in $page.post.tags"
        :key="tag.id"
        :to="tag.path"
        class="text-sm px-2 py-1 rounded leading-none bg-gray-100 hover:bg-gray-200 font-bold shadow-none text-gray-800"
        :class="{'mr-1': index < $page.post.tags.length - 1}"
      >
        #{{ tag.title }}
      </g-link>

      <!-- <div class="">
        <h2>Similar posts</h2>
        ...
      </div> -->
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
    date (format: "DD MMM, YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    intro
    content
    featured_image (width: 1400, height: 630)
  }
}
</page-query>
