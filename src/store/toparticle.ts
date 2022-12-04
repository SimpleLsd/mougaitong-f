import type { Module } from "vuex";
import type { IRootState, IArticle } from "./types";
import { getArticleById } from "@/service";

const toparticle: Module<IArticle, IRootState> = {
  namespaced: true,
  state() {
    return {
      id: "--",
      articleId: "--",
      totalNum: 0,
      dateStr: "--",
      articleTags: [],
      title: "--",
      subTitle: "--",
      cover: "--",
      sections: [],
    };
  },
  mutations: {
    changeAtricleMutations(state, article) {
      state.articleId = article.articleId;
      state.totalNum = article.totalNum;
      state.dateStr = article.dateStr;
      state.articleTags = article.articleTags;
      state.title = article.title;
      state.subTitle = article.subTitle;
      state.cover = article.cover;
      state.sections = article.sections;
    },
  },
  actions: {
    async getToparticleAction({ commit, dispatch }) {
      const a = await dispatch(
        "metadata/getTopArticleFromMetadata",
        {},
        { root: true }
      );
      const b = await getArticleById(a);
      console.log(b[0]);
      commit("changeAtricleMutations", b[0]);
    },
  },
};

export default toparticle;
