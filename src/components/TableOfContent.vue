<template>
  <div class="py-8 h-full text-center sm:text-left">
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
import { articles } from "@/composables/articles";

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
