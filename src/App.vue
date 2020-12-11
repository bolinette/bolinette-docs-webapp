<template>
  <nav-bar />
  <router-view class="pt-14" />
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  components: {
    NavBar
  }
});
</script>
