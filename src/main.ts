import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

// import { getArticleById } from "./service";
// import { getMetadata } from "./service";

import "./assets/css/main.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

// console.log(await getArticleById(1));
// console.log(await getMetadata());

store.dispatch("metadata/getMetadataAction").then(() => {
  store.dispatch("toparticle/getToparticleAction");
});
