export interface IArticle {
  id?: string;
  title: string;
  description?: string;
  author?: string;
  origin?: string;
  backgroundURL: string;
  text?: JSX.Element;
}

export interface IArticlePreview {
  id?: string;
  title: string;
  description?: string;
  backgroundURL: string;
}

export interface IArticleContent {
  id?: string;
  author?: string;
  origin?: string;
  text?: string;
}
