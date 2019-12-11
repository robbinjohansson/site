<template>
  <div>
    <h1 class="mb-5">Archive</h1>

    <div :class="{'border-b mb-5 pb-10': $page.posts.pageInfo.totalPages > 1}">
      <div
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        class="mb-3"
      >

        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link><span class="text-sm text-gray-600 ml-2">{{ edge.node.date }}</span>

      </div>
    </div>

    <Pager class="nav" v-if="$page.posts.pageInfo.totalPages > 1" :info="$page.posts.pageInfo"/>

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
    posts: allPost(sortBy: "date", order: DESC, filter: { published: { eq: true }}, perPage: 10, page: $page) @paginate {
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
