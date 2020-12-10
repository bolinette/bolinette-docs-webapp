<template>
  <div v-for="anchor in anchors" :key="anchor.name" class="anchor">
    <component :is="`h${level}`" :style="`margin-left: ${0.8 * level}rem`">{{
      anchor.name
    }}</component>
    <table-of-content-anchors
      v-if="anchor.children"
      :anchors="anchor.children"
      :level="level + 1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
    }
  }
});
</script>

<style scoped>
.anchor h1 {
  @apply uppercase font-semibold text-xs text-gray-900 py-1;
}

.anchor h2 {
  @apply transition-colors duration-200 hover:text-gray-900 text-gray-500 py-1 text-sm;
}
</style>
