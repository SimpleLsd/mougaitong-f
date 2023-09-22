import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorksView from "../views/WorksView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import GalleryView from "../views/GalleryView.vue";
import AboutView from "../views/AboutView.vue";
import PageTest from "../views/PageTest.vue";

import ArticleDetailView from "../views/ArticleDetailView.vue";
import PictureDetailView from "../views/PictureDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/works",
      name: "works",
      component: WorksView,
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticlesView,
    },
    {
      path: "/articles/:num",
      name: "articles_detail",
      component: ArticleDetailView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/pictures/:num",
      name: "pictures_detail",
      component: PictureDetailView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/test",
      name: "test",
      component: PageTest,
    },
    {
      path: "/abouta",
      name: "abouta",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

export default router;
