import { IReduxAction } from "../../interfaces/redux";
import { LanguageEnum } from "../../interfaces/common";
import { IArticle, INewsResponse } from "../../interfaces/news";
import newsAPI, { IFetchNewsParams } from "../../api/news";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateModel {
  news: IArticle[];
  loading: boolean;
  isLoadMore: boolean;
  newsResponse: INewsResponse | null;
  languageOfNews: LanguageEnum | string | null;
}

const initialState: StateModel = {
  news: [],
  loading: false,
  isLoadMore: false,
  newsResponse: null,
  languageOfNews: null,
};

export const getNews: any = createAsyncThunk(
  "news/getNews",
  async ({ lang, max }: IFetchNewsParams) => {
    try {
      const params = {
        lang,
        pageSize: max,
      };

      const response = await newsAPI.getNews(params);

      return response;
    } catch (error: any) {
      return error.message;
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state: StateModel, action: PayloadAction<IArticle[]>) => {
      state.news = action.payload;
    },

    setLoadMore: (state: StateModel, action: PayloadAction<boolean>) => {
      state.isLoadMore = action.payload;
    },

    setLanguageOfNews: (
      state: StateModel,
      action: PayloadAction<LanguageEnum>
    ) => {
      state.languageOfNews = action.payload;
    },

    setNewsResponse: (
      state: StateModel,
      action: PayloadAction<INewsResponse>
    ) => {
      state.newsResponse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getNews.fulfilled,
      (state: StateModel, action: IReduxAction) => {
        if (state.isLoadMore) {
          state.news = [...state.news, ...action.payload.articles];
        } else {
          state.news = action.payload.articles;
        }
        state.loading = false;
        state.isLoadMore = false;
        state.newsResponse = action.payload;
      }
    );
    builder.addCase(getNews.pending, (state: StateModel) => {
      state.loading = true;
    });
  },
});

export const { setNews } = newsSlice.actions;
export const { setLoadMore } = newsSlice.actions;
export const { setNewsResponse } = newsSlice.actions;
export const { setLanguageOfNews } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
