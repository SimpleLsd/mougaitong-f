import { defineStore } from "pinia";
import { getMetadata } from "@/service";
import type { IMetadata } from "./types";

export const useMetadataStore = defineStore("metadata", {
  state: (): IMetadata => ({
    ready: false,
    _id: "",
    topArticle: 0,
    totalNum: 0,
    totalArticleNum: 0,
    totalPictureNum: 0,
    totalChatNum: 0,
    topCollection: "",
    totalTags: [],
    secondArticle: [],
  }),
  getters: {},
  actions: {
    async getMetadataAction() {
      try {
        const metadata: IMetadata = await getMetadata();
        this.ready = true;
        this._id = metadata._id;
        this.topArticle = metadata.topArticle;
        this.totalNum = metadata.totalNum;
        this.totalArticleNum = metadata.totalArticleNum;
        this.totalPictureNum = metadata.totalPictureNum;
        this.totalChatNum = metadata.totalChatNum;
        this.topCollection = metadata.topCollection;
        this.totalTags = metadata.totalTags;
        this.secondArticle = metadata.secondArticle;
        console.log(1);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
