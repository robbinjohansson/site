<template>
  <article-list
    :headerText="`Tag: #${$page.tag.title}`"
    :pageInfo="$page.tag.belongsTo.pageInfo"
    :collection="$page.tag.belongsTo.edges"
  >
  </article-list>
</template>

<script>
import ArticleList from '~/components/ArticleList';

export default {
  metaInfo: {
    title: 'Tag',
  },

  components: {
    'article-list': ArticleList,
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
