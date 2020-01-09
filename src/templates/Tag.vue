<template>
  <div>
    <h1 class="mb-3">Tag: #{{ $page.tag.title }}</h1>

    <div :class="{'border-b mb-5 pb-10': $page.tag.belongsTo.pageInfo.totalPages > 1}">
      <div
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        class="mb-6 flex flex-col items-start"
      >

        <span class="text-sm text-gray-600 mb-2">
          <span>{{ edge.node.date }} // <span v-if="edge.node.sharable_domain" v-html="`[${edge.node.sharable_domain}]`"></span><span v-else>{{ edge.node.timeToRead }} min read</span></span>
        </span>

        <a
          v-if="edge.node.sharable_url"
          :href="edge.node.sharable_url"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {{ edge.node.title }}
        </a>

        <g-link
          v-else
          :to="edge.node.path"
        >
          {{ edge.node.title }}
        </g-link>

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
            sharable_url
            sharable_domain
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
