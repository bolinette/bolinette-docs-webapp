<template>
  <div class="px-2 py-8 h-full">
    <div v-for="article in articles" :key="article.name">
      <table-of-content-anchors
        :page="article.name"
        :anchors="article.anchors"
        :tag="tag"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableOfContentAnchors from "./TableOfContentAnchors.vue";

export default defineComponent({
  props: {
    articles: {
      type: Array,
      required: true
    },
    tag: {
      type: String,
      required: true
    }
  },
  components: {
    TableOfContentAnchors
  }
});
</script>
