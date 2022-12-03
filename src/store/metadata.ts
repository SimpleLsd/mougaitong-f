import type { Module } from "vuex";
import type { IMetadataObject, IRootState } from "./types";
import { getMetadata } from "@/service";

const metadata: Module<IMetadataObject, IRootState> = {
  namespaced: true,
  state() {
    return {
      metadata: {
        // id: "",
        topArticle: "",
        totalNum: 0,
        totalArticleNum: 0,
        totalPictureNum: 0,
        totalChatNum: 0,
        articleTags: [],
      },
    };
  },
  getters: {},
  mutations: {
    changeMetadataMutation(state, metadata) {
      state.metadata = metadata;
      // console.log(state.metadata);
    },
  },
  actions: {
    async getMetadataAction({ commit }) {
      const metadata: IMetadataObject = await getMetadata();
      commit("changeMetadataMutation", metadata);
    },
  },
};

export default metadata;
