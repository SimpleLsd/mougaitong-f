export interface IMetadata {
  ready: boolean;
  _id?: string;
  topArticle: number;
  totalNum: number;
  totalArticleNum: number;
  totalPictureNum: number;
  totalChatNum: number;
  topCollection: string;
  totalTags: Array<IArticleTag>;
  allArticles: IArticleArray;
  allPictures: IPictureArray;
  secondArticle: Array<number>;
}

export interface IMetadataObject {
  metadata: IMetadata;
}

interface IArticleTag {
  tagID: string;
  tagName: string;
  tagRoute: string;
}

export interface IArticleSection {
  sectionType: string;
  sectionContent: Array<string>;
  sectionDescription: string;
  sectionAlign: string;
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

export interface IArticleArray {
  [index: number]: IArticle;
}

export interface IPicture {
  _id?: string;
  pictureNum: number;
  pictureId: string;
  totalNum: number;
  dateStr: string;
  pictureTags: Array<IArticleTag>;
  title: string;
  link: string;
  descriptions: Array<IArticleSection>;
  size: Array<number>;
}

export interface IPictureArray {
  [index: number]: IPicture;
}
