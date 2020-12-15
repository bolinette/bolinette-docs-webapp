<template>
  <div
    class="w-screen h-14 bg-ideDark fixed flex justify-between items-center top-0 left-0"
  >
    <div class="text-white pl-4 text-2xl font-light tracking-widest">
      <span class="text-red-500 transform rotate-6 inline-block font-bold"
        >B</span
      >olinette
    </div>
    <div class="mr-4 text-white">
      <div class="sm:hidden cursor-pointer">
        <svg-icon
          type="mdi"
          :path="isMobileMenuOpen ? mdiClose : mdiMenu"
          @click="toggleMobileMenu"
        />
      </div>
      <a class="hidden sm:block" :href="githubUrl" target="_blank">
        <svg-icon type="mdi" :path="mdiGithub"></svg-icon>
      </a>
    </div>
  </div>
  <mobile-menu v-if="isMobileMenuOpen" class="sm:hidden" />
</template>

<script>
import { mdiGithub, mdiMenu, mdiClose } from "@mdi/js";
import { defineComponent } from "vue";
import MobileMenu from "./MobileMenu";
import { isMobileMenuOpen, toggleMobileMenu } from "@/composables/mobileMenu";

export default defineComponent({
  components: {
    MobileMenu
  },
  setup() {
    return {
      mdiGithub,
      mdiMenu,
      mdiClose,
      githubUrl: process.env.GITHUB_URL,
      isMobileMenuOpen,
      toggleMobileMenu
    };
  }
});
</script>
