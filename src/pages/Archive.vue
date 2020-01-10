<template>
  <article-list
    headerText="Archive"
    :pageInfo="$page.posts.pageInfo"
    :collection="$page.posts.edges"
  >
  </article-list>
</template>

<script>
import ArticleList from '~/components/ArticleList';

export default {
  metaInfo: {
    title: 'Archive'
  },

  components: {
    'article-list': ArticleList,
  },
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
          sharable_url
          sharable_domain
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
