<template>
  <div class="flex h-screen">
    <template v-if="loading">
      <div
        class="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <DoubleBounce background="red" />
        <div class="font-semibold">Loading...</div>
      </div>
    </template>
    <template v-else-if="!error">
      <sidebar />
      <doc-page />
    </template>
    <template v-else>
      <div class="h-full w-full px-10 py-6">
        <div
          class="bg-red-100 text-red-600 font-semibold border-l-4 border-red-600 px-4 py-4 flex"
        >
          <svg-icon
            class="mr-6"
            type="mdi"
            :path="mdiAlertCircleOutline"
          ></svg-icon>
          <div>Error while fetching data</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";
import DocPage from "../components/DocPage.vue";
import { fetchArticles, error, loading } from "@/composables/articles";
import { useRoute, useRouter } from "vue-router";
import { DoubleBounce } from "vue-loading-spinner";
import { mdiAlertCircleOutline } from "@mdi/js";

export default defineComponent({
  components: {
    Sidebar,
    DocPage,
    DoubleBounce
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const fetchPromise = fetchArticles();

    if (!route.params.catchAll) {
      fetchPromise.then(({ success, articles }) => {
        if (success) {
          router.push({ path: `/docs/${articles[0].name}` });
        }
      });
    }

    return {
      loading,
      error,
      mdiAlertCircleOutline
    };
  }
});
</script>
