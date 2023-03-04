import { APIService } from "../axiosInstance";
import {
  IArticle,
  ILikedNewsResponse,
  INewsResponse,
} from "../../interfaces/news";
import { apiConfig } from "../../config";
import { LanguageEnum } from "../../interfaces/common";

export interface IFetchNewsParams {
  lang?: LanguageEnum;
  max: number;
}

const newsAPI = {
  getNews: async ({ lang = LanguageEnum.EN, pageSize = 10 }: any) => {
    return APIService.get<INewsResponse>(`${apiConfig}/news`, {
      params: { lang, pageSize },
    }).then(({ data }) => data);
  },
  getLikedNews: async ({ lang = LanguageEnum.EN }: any) => {
    return APIService.get<ILikedNewsResponse>(`${apiConfig}/news/likedNews`, {
      params: { lang },
    }).then(({ data }) => data);
  },
  likeArticle: async (id: string) => {
    return APIService.put<IArticle>(`${apiConfig}/news/like?id=${id}`).then(
      ({ data }) => data
    );
  },
};

export default newsAPI;
