<template>
  <div
    class="w-screen h-14 bg-ideDark fixed flex justify-between items-center top-0 left-0"
  >
    <div class="text-white pl-4 text-2xl font-light tracking-widest">
      <span class="text-red-500 transform rotate-6 inline-block font-bold"
        >B</span
      >olinette
    </div>
    <div class="mr-4">
      <a :href="githubUrl" target="_blank">
        <svg-icon class="text-white" type="mdi" :path="mdiGithub"></svg-icon>
      </a>
    </div>
  </div>
</template>

<script>
import { mdiGithub } from "@mdi/js";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      mdiGithub,
      githubUrl: process.env.GITHUB_URL
    };
  }
});
</script>
