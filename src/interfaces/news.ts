interface ISource {
  id: number | null;
  name: string;
}

export interface INewsResponse {
  articles: IArticle[];
  status: string;
  totalResults: number;
}

export interface IArticle {
  author: string | null;
  content: string;
  isLiked?: boolean;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
  source: ISource;
}
