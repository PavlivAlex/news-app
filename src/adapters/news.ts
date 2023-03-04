import { IArticle, INewsResponse } from "../interfaces/news";

export const newsAdapter = {
  // mapNews: (response: INewsResponse) => {
  //   const articles = response.articles.map((article) => {
  //     article.isLiked = false;
  //     return article;
  //   });

  //   return { ...response, articles };
  // },

  setLikedNews: (
    response: INewsResponse,
    likedNews: IArticle[]
  ): INewsResponse => {
    const mappedNews = response.articles.map((article) => {
      const findedArticle = likedNews.find((x) => x.url === article.url);
      article.isLiked = findedArticle?.isLiked;
      return article;
    });

    return { ...response, articles: mappedNews };
  },
};
