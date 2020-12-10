<template>
  <div class="px-2 py-4 bg-gray-50 h-full">
    <div v-for="article in articles" :key="article.name">
      <table-of-content-anchors :anchors="article.anchors" />
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
    }
  },
  components: {
    TableOfContentAnchors
  }
});
</script>
