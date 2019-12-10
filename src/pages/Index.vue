<template>
  <div class="mt-5">
    <div v-for="edge in $page.posts.edges" :key="edge.node.id" class="mb-5">
      <h1>
        <g-link :to="edge.node.path" class="text-xl font-bold hover:underline">{{ edge.node.title }}</g-link>
      </h1>
      {{ edge.node.date }} | {{ edge.node.timeToRead }} min
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Main page'
  }
}
</script>

<page-query>
  query {
    posts: allPost(filter: { published: { eq: true }}) {
      edges {
        node {
          id
          title
          date (format: "D. MMMM YYYY")
          timeToRead
          description
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
