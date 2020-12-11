<template>
  <div class="h-full w-full overflow-y-auto px-6 py-8">
    <div class="mx-auto max-w-4xl">
      <div ref="contentDiv" id="content-div"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, watch, ref, nextTick } from "vue";
import { useRoute } from "vue-router";
import hljs from "highlight.js";

export default defineComponent({
  setup() {
    const contentDiv = ref(null);
    const route = useRoute();

    watch(
      () => route.params,
      newParams => {
        fetch(`${process.env.API_URL}/docs/${newParams.catchAll}`)
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
