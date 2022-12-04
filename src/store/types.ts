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

interface IArticleTag {
  tagID: string;
  tagName: string;
  tagRoute: string;
}

interface IArticleSection {
  sectionType: string;
  sectionContent: string;
  sectionDescription: string;
}

export interface IArticle {
  id?: string;
  articleId: string;
  totalNum: number;
  dateStr: string;
  articleTags: Array<IArticleTag>;
  title: string;
  subTitle: string;
  cover: string;
  sections: Array<IArticleSection>;
}

export interface IMetadataObject {
  metadata: IMetadata;
}
