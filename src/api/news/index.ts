import { APIService } from "../axiosInstance";
import { newsAdapter } from "../../adapters/news";
import { IArticle, INewsResponse } from "../../interfaces/news";
import { apiConfig, apiKey } from "../../config";
import { LanguageEnum } from "../../interfaces/common";

export interface IFetchNewsParams {
  lang?: LanguageEnum;
  max: number;
}

const newsAPI = {
  getNews: async ({ lang = LanguageEnum.EN, max = 10 }: IFetchNewsParams) => {
    return APIService.get<INewsResponse>(`${apiConfig}/top-headlines`, {
      params: { category: "general", apikey: apiKey, max, country: lang },
    }).then(({ data }) => data);
  },
  getTest: async ({ lang = LanguageEnum.EN, pageSize = 20 }: any) => {
    return APIService.get<INewsResponse>("http://localhost:3001/api/news", {
      params: { lang: "ua", pageSize },
    }).then(({ data }) => data);
  },
  likeArticle: async (id: string) => {
    return APIService.put<IArticle>(
      `http://localhost:3001/api/news/like?id=${id}`
    ).then(({ data }) => data);
  },
};

export default newsAPI;
