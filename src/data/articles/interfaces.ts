export interface IArticle {
  id?: string;
  title: string;
  description?: string;
  author?: string;
  origin?: string;
  backgroundURL: string;
  minBackgroundURL: string;
  text?: JSX.Element;
}

export interface IArticlePreview {
  id?: string;
  title: string;
  description?: string;
  minBackgroundURL: string;
}

export interface IArticleContent {
  id?: string;
  title: string;
  author?: string;
  origin?: string;
  text?: string;
  backgroundURL: string;
}
