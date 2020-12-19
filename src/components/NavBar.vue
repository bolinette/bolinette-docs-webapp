<template>
  <div
    class="w-screen h-14 bg-black fixed flex justify-between items-center top-0 left-0"
  >
    <div class="text-white pl-4 text-2xl font-light tracking-widest">
      <router-link :to="{ name: 'home' }">
        <span class="text-red-500 transform -rotate-12 inline-block font-bold"
          >B</span
        >olinette
      </router-link>
    </div>
    <div class="mr-4 text-white">
      <div class="sm:hidden cursor-pointer">
        <svg-icon
          v-if="!isHomePage"
          type="mdi"
          :path="isMobileMenuOpen ? mdiClose : mdiMenu"
          @click="toggleMobileMenu"
        />
        <a v-else :href="githubUrl" target="_blank">
          <svg-icon type="mdi" :path="mdiGithub"></svg-icon>
        </a>
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
import { defineComponent, watch, ref } from "vue";
import MobileMenu from "./MobileMenu";
import { isMobileMenuOpen, toggleMobileMenu } from "@/composables/mobileMenu";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    MobileMenu
  },
  setup() {
    const route = useRoute();
    const isHomePage = ref(true);
    watch(
      () => route.name,
      routeName => {
        isHomePage.value = routeName === "home";
      }
    );

    return {
      mdiGithub,
      mdiMenu,
      mdiClose,
      githubUrl: process.env.GITHUB_URL,
      isMobileMenuOpen,
      toggleMobileMenu,
      isHomePage
    };
  }
});
</script>
