import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import SvgIcon from "@jamescoyle/vue-icon/lib/svg-icon.vue";
import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/monokai-sublime.css";
hljs.registerLanguage("python", python);

createApp(App)
  .use(store)
  .use(router)
  .component("SvgIcon", SvgIcon)
  .mount("#app");
