<template>
  <div>
    <div
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      class="border-b pb-12 mb-12 md:pb-16 md:mb-16"
    >

      <h2>
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
      </h2>

      <div class="text-sm text-gray-600 mb-6">
        <span>{{ edge.node.date }} // <span v-if="edge.node.sharable_domain" v-html="`[${edge.node.sharable_domain}]`"></span><span v-else>{{ edge.node.timeToRead }} min read</span></span>
      </div>

      <div v-html="edge.node.intro"></div>

      <a
        v-if="edge.node.sharable_url"
        :href="edge.node.sharable_url"
        target="_blank"
        rel="nofollow noopener noreferrer"
        class="inline-block mt-5"
      >
          Read more &rarr;
      </a>

      <g-link
        v-else
        :to="edge.node.path"
        class="inline-block mt-5"
      >
        Read more &rarr;
      </g-link>

      <!-- <div
        v-if="edge.node.tags.length > 0"
        class="mb-2 text-sm font-bold font-mono tracking-normal leading-none"
      >
        <g-link
          v-for="(tag, index) in edge.node.tags"
          :key="tag.id"
          :to="tag.path"
          class="bg-gray-200 p-1"
          :class="{'mr-2': index < edge.node.tags.length - 1}"
        >
          {{ `#${tag.title}` }}
        </g-link>
      </div> -->

    </div>

    <g-link
      class="inline-block mt-5"
      to="/archive/"
    >
      All posts &rarr;
    </g-link>

  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Feed'
  }
}
</script>

<page-query>
  query {
    posts: allPost(sortBy: "date", order: DESC, limit: 3, filter: { published: { eq: true }}) {
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
