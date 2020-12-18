<template>
  <div v-for="anchor in anchors" :key="anchor.name" class="anchor">
    <router-link :to="`/docs/${page}${level > 1 ? `#${anchor.name}` : ''}`">
      <component :is="`h${level}`" :style="`margin-left: ${0.8 * level}rem`">{{
        anchor.name
      }}</component>
    </router-link>
    <table-of-content-anchors
      v-if="anchor.children"
      :anchors="anchor.children"
      :level="level + 1"
      :page="page"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tag } from "@/composables/articles";

export default defineComponent({
  name: "TableOfContentAnchors",
  props: {
    anchors: {
      type: Array,
      required: true
    },
    level: {
      type: Number,
      default: 1
    },
    page: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      tag
    };
  }
});
</script>

<style scoped>
.anchor {
  @apply whitespace-nowrap;
}

.anchor h1 {
  @apply uppercase font-semibold mb-4 sm:mb-0 text-xl sm:text-xs text-gray-800 py-1;
}

.anchor h2 {
  @apply transition-colors duration-200 hidden sm:block text-sm hover:text-gray-800 text-gray-500 py-1;
}
</style>
