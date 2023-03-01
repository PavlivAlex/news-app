import { APIService } from "../axiosInstance";
import { newsAdapter } from "../../adapters/news";
import { INewsResponse } from "../../interfaces/news";
import { apiConfig, apiKey } from "../../config";
import { LanguageEnum } from "../../interfaces/common";

export interface IFetchNewsParams {
  lang?: LanguageEnum;
  page: number;
  pageSize: number;
}

const newsAPI = {
  getNews: async ({
    lang = LanguageEnum.EN,
    page = 1,
    pageSize = 10,
  }: IFetchNewsParams) => {
    return APIService.get<INewsResponse>(`${apiConfig}/top-headlines`, {
      params: { country: lang, apiKey, page, pageSize },
    }).then(({ data }) => newsAdapter.mapNews(data));
  },
};

export default newsAPI;
