<template>
  <div>
    <h1 class="mb-3">Tag: #{{ $page.tag.title }}</h1>

    <div :class="{'border-b mb-5 pb-10': $page.tag.belongsTo.pageInfo.totalPages > 1}">
      <div
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        class="mb-3"
      >

        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link><span class="text-sm text-gray-600 ml-2">{{ edge.node.date }}</span>

      </div>
    </div>

    <Pager class="nav" v-if="$page.tag.belongsTo.pageInfo.totalPages > 1" :info="$page.tag.belongsTo.pageInfo"/>

  </div>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag (id: $id) {
    title
    belongsTo (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "DD MMM, YYYY")
            timeToRead
            intro
            content
          }
        }
      }
    }
  }
}
</page-query>
