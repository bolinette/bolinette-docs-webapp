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
const error = ref(false);
const loading = ref(false);

const fetchArticles = async () => {
  error.value = false;
  loading.value = true;
  try {
    const res = await fetch(`${process.env.API_URL}/docs`, { mode: "cors" });
    const json = await res.json();
    const { code, data } = json;
    if (code !== 200) {
      error.value = true;
      return { success: false, articles: [], tag: "" };
    }

    articles.value = data?.articles as Article[];
    tag.value = data?.tag;
    return { success: true, articles: articles.value, tag: tag.value };
  } catch {
    error.value = true;
    return { success: false, articles: [], tag: "" };
  } finally {
    loading.value = false;
  }
};

export { articles, tag, error, loading, fetchArticles };
