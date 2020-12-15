import { ref } from "vue";

const articles = ref([]);
const tag = ref("");

const fetchArticles = async () => {
  const res = await fetch(`${process.env.API_URL}/docs`, { mode: "cors" });
  const json = await res.json();
  const { code, data } = json;
  if (code !== 200) {
    return { articles: [], tag: "" };
  }

  articles.value = data?.articles;
  tag.value = data?.tag;
  return { articles: articles.value as any, tag: tag.value };
};

export { articles, tag, fetchArticles };
