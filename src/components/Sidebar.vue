<template>
  <div class="h-full hidden sm:block w-80 overflow-y-auto bg-gray-50">
    <table-of-content v-if="articles" :articles="articles" :tag="tag" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import TableOfContent from "../components/TableOfContent.vue";

export default defineComponent({
  components: {
    TableOfContent
  },
  setup() {
    const articles = ref(null);
    const tag = ref(null);
    const router = useRouter();

    fetch(`${process.env.API_URL}/docs`, { mode: "cors" })
      .then(res => res.json())
      .then(json => {
        const { code, data } = json;
        if (code !== 200) {
          return;
        }

        articles.value = data?.articles;
        tag.value = data?.tag;
        router.push({
          path: `/docs/a/en/${tag.value}/${articles.value[0].name}`
        });
      });

    return { articles, tag };
  }
});
</script>
