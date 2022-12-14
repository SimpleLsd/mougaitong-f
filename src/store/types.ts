export interface IMetadata {
  ready: boolean;
  _id?: string;
  topArticle: number;
  totalNum: number;
  totalArticleNum: number;
  totalPictureNum: number;
  totalChatNum: number;
  topCollection: string;
  articleTags: Array<IArticleTag>;
  secondArticle: Array<string>;
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
  _id?: string;
  articleNum: number;
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
