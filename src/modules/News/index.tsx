import React, { useEffect, useMemo, useState } from "react";

// helpers
import newsAPI from "../../api/news";
import { IArticle } from "../../interfaces/news";
import { StateModel } from "../../redux/store";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getNews, setLoadMore, setNews } from "../../redux/slices/news";

// components
import Button from "../../components/Button";
import Article from "../../components/Article";
import LoaderWrapper from "../../components/LoaderWrapper";
import { Box, Grid, styled } from "@mui/material";

// styles
import { variables } from "../../assets/styles/variables";

export interface ISelectedArticle {
  isItemSelected: boolean;
  index: number | null;
}

const News = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(10);

  const { news, languageOfNews, newsResponse, loading } = useSelector(
    (state: StateModel) => state.newsReducer
  );

  const handleRemoveArticle = (removedArticleIndex: number) => {
    const filteredNews = news.filter(
      (_, index) => index !== removedArticleIndex
    );
    dispatch(setNews(filteredNews));
  };

  const handleLoadMore = () => {
    setPageSize((prevState) => prevState + 10);
    dispatch(setLoadMore(true));
  };

  const handleLikeArticle = async (id: string) => {
    const response = await newsAPI.likeArticle(id);
    const copiedNews: IArticle[] = JSON.parse(JSON.stringify(news));
    const mappedNews = copiedNews.map((article) => {
      if (article._id === id) {
        article.isLiked = response.isLiked;
      }

      return article;
    });

    dispatch(setNews(mappedNews));
  };

  const renderArticles = useMemo(() => {
    return news?.map((article: IArticle, index: number) => (
      <Article
        index={index}
        key={index}
        article={article}
        isLikedArticle={false}
        handleLikeArticle={handleLikeArticle}
        handleRemoveArticle={handleRemoveArticle}
      />
    ));
  }, [news]);

  useEffect(() => {
    dispatch(getNews({ lang: languageOfNews, max: pageSize }));
  }, [pageSize, languageOfNews]);

  return (
    <>
      <NewsPageBox>
        <LoaderWrapper isLoading={loading}>
          <Grid container spacing={4}>
            {renderArticles}
          </Grid>
        </LoaderWrapper>
        {news && newsResponse && news.length < newsResponse.totalArticles && (
          <LoadMoreButton onClick={handleLoadMore}>
            <>{t("news.load_more")}</>
          </LoadMoreButton>
        )}
      </NewsPageBox>
    </>
  );
};

const NewsPageBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  background: "#e4e4e4",
  padding: variables.paddingXL,
});

const LoadMoreButton = styled(Button)({
  width: "180px",
  margin: variables.marginL,
  marginBottom: 0,
});

export default News;
