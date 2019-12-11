<template>
    <div>
      <h1 class="mb-3"># {{ $page.tag.title }}</h1>

      <div
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        class="mb-2"
      >
        <g-link :to="edge.node.id">{{ edge.node.title }}</g-link><span class="text-sm text-gray-600 ml-2">{{ edge.node.date }}</span>
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
