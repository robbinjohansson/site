<template>
    <div>
      <h1 class="tag-title text-center space-bottom">
        # {{ $page.tag.title }}
      </h1>
    <div v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      {{ edge.node.date }}
    </div>
  </div>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
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
