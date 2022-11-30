import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import getArticleById from "./service";

import "./assets/css/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

// console.log(await getArticleById(1));
