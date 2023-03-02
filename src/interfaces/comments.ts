export interface ILoadedArticlesInfo {
  [key: string]: ILoadedArticleInfo;
}

export interface ILoadedArticleInfo {
  id: string;
  views: number;
  comments: IComment[];
}

export interface IComment {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  date: string;
  text: string;
}
