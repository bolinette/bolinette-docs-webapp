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
import { fetchArticles } from "@/providers/articles";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  components: {
    Sidebar,
    DocPage
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const fetchPromise = fetchArticles();

    if (!route.params.catchAll) {
      fetchPromise.then(({ articles, tag }) => {
        router.push({ path: `/docs/a/en/${tag}/${articles[0].name}` });
      });
    }
  }
});
</script>
