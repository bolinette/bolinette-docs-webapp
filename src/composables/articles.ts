import { ref } from "vue";

interface Article {
  lang: string;
  name: string;
  position: number;
  anchors: Anchor[];
}

interface Anchor {
  name: string;
  tag: string;
  position: number;
  children: Anchor[];
}

const articles = ref<Article[]>([]);
const tag = ref("");

const fetchArticles = async () => {
  const res = await fetch(`${process.env.API_URL}/docs`, { mode: "cors" });
  const json = await res.json();
  const { code, data } = json;
  if (code !== 200) {
    return { articles: [], tag: "" };
  }

  articles.value = data?.articles as Article[];
  tag.value = data?.tag;
  return { articles: articles.value, tag: tag.value };
};

export { articles, tag, fetchArticles };
