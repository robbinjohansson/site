<template>
  <div>
    <div
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      class="border-b mb-16 pb-16"
    >

      <h2>
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </h2>

      <div class="text-sm text-gray-600 mt-1 mb-6">
        <span>{{ edge.node.date }} | {{ edge.node.timeToRead }} min read</span>
      </div>

      <div v-html="edge.node.intro"></div>

      <g-link
        class="inline-block mt-5"
        :to="edge.node.path"
      >
        Read more &rarr;
      </g-link>

      <!-- <div
        v-if="edge.node.tags.length > 0"
        class="mb-2 text-sm font-bold font-mono tracking-normal leading-none"
      >
        <g-link
          v-for="(tag, index) in edge.node.tags"
          :key="tag.id"
          :to="tag.path"
          class="bg-gray-200 p-1"
          :class="{'mr-2': index < edge.node.tags.length - 1}"
        >
          {{ `#${tag.title}` }}
        </g-link>
      </div> -->

    </div>

    <!-- <g-link
      class="inline-block mt-5"
      to="/archive/"
    >
      Older posts &rarr;
    </g-link> -->

  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Posts'
  }
}
</script>

<page-query>
  query {
    posts: allPost(sortBy: "date", order: DESC, limit: 3, filter: { published: { eq: true }}) {
      edges {
        node {
          id
          title
          date (format: "DD MMM, YYYY")
          timeToRead
          intro
          path
          tags {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>
