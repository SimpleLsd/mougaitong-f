import type { Module } from "vuex";
import type { IMetadata, IRootState } from "./types";

const metadata: Module<IMetadata, IRootState> = {
  namespaced: true,
  state() {
    return {
      topArticle: "",
      totalNum: 0,
      totalArticleNum: 0,
      totalPictureNum: 0,
      totalChatNum: 0,
      articleTags: [],
    };
  },
  getters: {},
  mutations: {},
  actions: {
    getMetadata({ commit }, payload: number) {
      console.log("执行action", commit, payload);
    },
  },
};

export default metadata;
