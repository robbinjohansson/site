module.exports = function (api) {
  api.onCreateNode(options => {
    if (options.internal.typeName === 'Post') {
      options.sharable_url = options.sharable_url || "";

      return {
        ...options
      };
    }
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allPost (filter: { sharable_url: { eq: "" } }) {
        edges {
          node {
            id
            path
          }
        }
      }
    }`)

    data.allPost.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: './src/templates/PostEntry.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
