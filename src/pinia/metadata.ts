import { defineStore } from "pinia";
import { getMetadata } from "@/service";

export const useMetadataStore = defineStore("metadata", {
  state: () => ({
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
  }),
  getters: {},
  actions: {
    async getMetadataAction() {
      try {
        const metadata = await getMetadata();
        console.log(metadata);
        this.ready = true;
        this.id = metadata.id;
        this.topArticle = metadata.topArticle;
        this.totalNum = metadata.totalNum;
        this.totalArticleNum = metadata.totalArticleNum;
        this.totalPictureNum = metadata.totalPictureNum;
        this.totalChatNum = metadata.totalChatNum;
        this.topCollection = metadata.topCollection;
        this.articleTags = metadata.articleTags;
        this.secondArticle = metadata.secondArticle;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
