import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/monokai-sublime.css";
hljs.registerLanguage("python", python);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
