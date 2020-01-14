<template>
    <div>
      <h1 class="mb-3">{{ headerText }}</h1>

      <div :class="{'border-b mb-5 pb-10': pageInfo.totalPages > 1}">
        <div
          v-for="edge in collection"
          :key="edge.node.id"
          class="mb-6 flex flex-col items-start"
        >

          <span class="text-sm text-gray-600 mb-2">
            <span>{{ edge.node.date }} // <span v-if="edge.node.sharable_url" v-html="`[${getUrlHostname(edge.node.sharable_url)}]`"></span><span v-else>{{ edge.node.timeToRead }} min read</span></span>
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

      <Pager class="nav" v-if="pageInfo.totalPages > 1" :info="pageInfo"/>

    </div>
</template>

<script>
import { Pager } from 'gridsome'

export default {
    props: ['headerText', 'pageInfo', 'collection'],

    components: {
      Pager
    },
}
</script>
