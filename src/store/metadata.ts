import type { Module } from "vuex";
import type { IMetadataObject, IMetadata, IRootState } from "./types";
import { getMetadata } from "@/service";

const metadata: Module<IMetadata, IRootState> = {
  namespaced: true,
  state() {
    return {
      ready: false,
      id: "",
      topArticle: "",
      totalNum: 0,
      totalArticleNum: 0,
      totalPictureNum: 0,
      totalChatNum: 0,
      topCollection: "",
      articleTags: [],
      secondArticle: [],
    };
  },
  getters: {},
  mutations: {
    changeMetadataMutation(state, metadata: IMetadata) {
      state.topArticle = metadata.topArticle;
      state.totalNum = metadata.totalNum;
      state.totalArticleNum = metadata.totalArticleNum;
      state.totalPictureNum = metadata.totalPictureNum;
      state.totalChatNum = metadata.totalChatNum;
      state.articleTags = metadata.articleTags;
      state.secondArticle = metadata.secondArticle;
      state.topCollection = metadata.topCollection;
      state.ready = true;
    },
  },
  actions: {
    async getMetadataAction({ commit }) {
      const metadata: IMetadataObject = await getMetadata();
      commit("changeMetadataMutation", metadata);
    },
    getTopArticleFromMetadata({ state }) {
      return state.topArticle;
    },
  },
};

export default metadata;
