interface ISource {
  id: number | null;
  name: string;
}

export interface INewsResponse {
  articles: IArticle[];
  totalArticles: number;
}

export interface IArticle {
  _id: string;
  author: string | null;
  content: string;
  isLiked?: boolean;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  image: string;
  source: ISource;
}
