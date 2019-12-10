<template>
  <div>
    <div
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      class="border-b mb-8 pb-8"
    >

      <h3>
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </h3>

      <div class="text-sm text-gray-600 mt-1 mb-4">
        <span>{{ edge.node.date }} | {{ edge.node.timeToRead }} min read</span>
      </div>

      <div class="text-base" v-html="edge.node.intro"></div>

      <g-link
        class="inline-block mt-4 text-sm"
        :to="edge.node.path"
      >
        Read more &rarr;
      </g-link>

    </div>

    <Pager class="nav" :info="$page.posts.pageInfo"/>

  </div>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'Archive'
  },

  components: {
    Pager
  }
}
</script>

<page-query>
  query ($page: Int) {
    posts: allPost(sortBy: "date", order: DESC, filter: { published: { eq: true }}, perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
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
