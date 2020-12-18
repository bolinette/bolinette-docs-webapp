<template>
  <div class="h-full w-full overflow-y-auto px-6 pb-8 pt-0 sm:pt-2">
    <div class="mx-auto max-w-4xl">
      <div ref="contentDiv" id="content-div"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, watch, ref, nextTick } from "vue";
import { useRoute } from "vue-router";
import { closeMobileMenu } from "@/composables/mobileMenu";
import { tag } from "@/composables/articles";
import hljs from "highlight.js";

export default defineComponent({
  setup() {
    const contentDiv = ref(null);
    const route = useRoute();

    const fetchPage = url => {
      fetch(url)
        .then(res => res.json())
        .then(json => {
          contentDiv.value.innerHTML = json.data.html;
          return nextTick;
        })
        .then(() => {
          contentDiv.value.querySelectorAll("pre code").forEach(block => {
            hljs.highlightBlock(block);
          });
        });
    };

    if (route.params.article) {
      fetchPage(
        `${process.env.API_URL}/docs/a/en/${tag.value}/${route.params.article}`
      );
    }
    watch(
      () => route.params,
      newParams => {
        fetchPage(
          `${process.env.API_URL}/docs/a/en/${tag.value}/${newParams.article}`
        );
        closeMobileMenu();
      }
    );

    return {
      contentDiv
    };
  }
});
</script>

<style scoped>
#content-div >>> h1 {
  @apply text-2xl mb-2 mt-6;
}

#content-div >>> h2 {
  @apply text-xl mb-2 mt-3;
}

#content-div >>> p {
  @apply text-gray-500 mb-4;
}

#content-div >>> pre > code {
  @apply text-sm;
}

#content-div >>> code:not([class^="language"]) {
  @apply bg-red-100 text-red-700 px-1 rounded-sm font-semibold whitespace-nowrap;
}
</style>
