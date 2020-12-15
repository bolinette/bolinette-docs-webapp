<template>
  <div class="px-2 py-8 h-full">
    <div v-for="article in articles" :key="article.name">
      <table-of-content-anchors
        :page="article.name"
        :anchors="article.anchors"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableOfContentAnchors from "./TableOfContentAnchors.vue";
import { articles } from "@/providers/articles";

export default defineComponent({
  components: {
    TableOfContentAnchors
  },
  setup() {
    return {
      articles
    };
  }
});
</script>
