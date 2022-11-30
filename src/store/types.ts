export interface IRootState {
  name: string;
}

export interface IMetadata {
  id?: string;
  topArticle: string;
  totalNum: number;
  totalArticleNum: number;
  totalPictureNum: number;
  totalChatNum: number;
  articleTags: Array<object>;
}
