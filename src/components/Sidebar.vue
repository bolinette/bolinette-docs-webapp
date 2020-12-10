<template>
  <div class="w-80">
    <table-of-content v-if="articles" :articles="articles" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TableOfContent from "../components/TableOfContent.vue";

export default defineComponent({
  components: {
    TableOfContent
  },
  setup() {
    const articles = ref(null);

    fetch(`${process.env.API_URL}/docs`, { mode: "cors" })
      .then(res => res.json())
      .then(json => {
        const { code, data } = json;
        if (code !== 200) {
          return;
        }

        articles.value = data?.articles;
      });

    return { articles };
  }
});
</script>
