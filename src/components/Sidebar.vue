<template>
  <div class="h-full hidden sm:block w-80 overflow-y-auto bg-gray-50">
    <table-of-content />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TableOfContent from "../components/TableOfContent.vue";

export default defineComponent({
  components: {
    TableOfContent
  }
});
</script>
