<template>
  <div class="flex h-screen">
    <sidebar />
    <div>content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
  components: {
    Sidebar
  }
});
</script>
