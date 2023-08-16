import { defineStore } from "pinia";
import {
  getMetadata,
  getArticles,
  getPictures,
  getArticlesCount,
  getPicturesCount,
} from "@/service";
import type { IMetadata, IArticleArray, IPictureArray } from "./types";

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
    allArticles: [] as IArticleArray,
    allPictures: [] as IPictureArray,
    secondArticle: [],
  }),
  getters: {},
  actions: {
    async getMetadataAction() {
      try {
        // 此处获取的数据后面要修改
        const metadata: IMetadata = await getMetadata();

        const allArticles = await getArticles();
        const allPictures = await getPictures();

        const articlesCount = await getArticlesCount();
        const picturesCount = await getPicturesCount();
        this.ready = true;
        this._id = metadata._id;
        this.topArticle = metadata.topArticle;
        this.totalNum = metadata.totalNum;
        this.totalArticleNum = articlesCount;
        this.totalPictureNum = picturesCount;
        this.totalChatNum = metadata.totalChatNum;
        this.topCollection = metadata.topCollection;
        this.totalTags = metadata.totalTags;
        this.allArticles = allArticles;
        this.allPictures = allPictures;
        this.secondArticle = metadata.secondArticle;
        // console.log(1);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
