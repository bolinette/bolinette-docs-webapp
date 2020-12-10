<template>
  <div v-for="anchor in anchors" :key="anchor.name">
    <span :style="`margin-left: ${level}rem`">{{ anchor.name }}</span>
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
