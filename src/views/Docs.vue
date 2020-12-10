<template>
  <div class="flex h-screen">
    <sidebar />
    <doc-page />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";
import DocPage from "../components/DocPage.vue";

export default defineComponent({
  components: {
    Sidebar,
    DocPage
  }
});
</script>
