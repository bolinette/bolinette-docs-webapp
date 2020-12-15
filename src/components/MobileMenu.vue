<template>
  <div class="fixed top-14 right-0 left-0 bottom-0 bg-white">
    <table-of-content />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TableOfContent from "./TableOfContent";

export default defineComponent({
  components: {
    TableOfContent
  }
});
</script>
