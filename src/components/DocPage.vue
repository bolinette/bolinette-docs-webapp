<template>
  <div class="h-full w-full overflow-y-auto px-6 pb-8 pt-0 sm:pt-2">
    <div class="mx-auto max-w-4xl">
      <div ref="contentDiv" id="content-div" v-html="htmlContent"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, nextTick, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { closeMobileMenu } from "@/composables/mobileMenu";
import { tag } from "@/composables/articles";
import hljs from "highlight.js";
import MarkdownIt from "markdown-it";

export default defineComponent({
  setup() {
    const contentDiv = ref(null);
    const route = useRoute();
    const md = new MarkdownIt();
    const htmlContent = ref("");

    const fetchPage = url => {
      fetch(url)
        .then(res => res.json())
        .then(json => {
          htmlContent.value = md.render(json.data.markdown);
          return nextTick;
        })
        .then(() => {
          contentDiv.value.querySelectorAll("pre code").forEach(block => {
            hljs.highlightBlock(block);
          });
        });
    };

    watchEffect(() => {
      if (!route.params.article || !tag.value) {
        return;
      }
      fetchPage(
        `${process.env.API_URL}/docs/a/en/${tag.value}/${route.params.article}`
      );
      closeMobileMenu();
    });

    return {
      contentDiv,
      htmlContent
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

#content-div >>> p,
#content-div >>> ul {
  @apply text-gray-500 mb-3;
}

#content-div >>> ul {
  @apply list-disc pl-6;
}

#content-div >>> blockquote > p {
  @apply mb-0 text-sm;
}

#content-div >>> blockquote {
  @apply bg-yellow-100 font-semibold border-l-2 border-yellow-800 px-4 py-3 mb-3;
}

#content-div >>> pre {
  @apply pb-3;
}

#content-div >>> pre > code {
  @apply text-sm;
}

#content-div >>> code:not([class^="language"]) {
  @apply bg-red-100 text-red-700 px-1 rounded-sm font-semibold whitespace-nowrap;
}
</style>
