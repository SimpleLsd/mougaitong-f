import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import sydRequest from "./service";

import "./assets/css/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

sydRequest.request({
  url: "/articles/test_articlae_id_8",
  method: "GET",
});
