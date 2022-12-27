import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// import store from "./store/index";
// import { getArticleById } from "./service";
// import { getMetadata } from "./service";

import "./assets/css/main.css";

const app = createApp(App);
const pinia = createPinia();

// app.use(store);
app.use(router);
app.use(pinia);

app.mount("#app");
