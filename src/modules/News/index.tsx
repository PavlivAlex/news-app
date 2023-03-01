import React, { useEffect, useMemo, useState } from "react";

// helpers
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

  const [page, setPage] = useState(1);

  const { news, languageOfNews, newsResponse, loading } = useSelector(
    (state: StateModel) => state.newsReducer
  );

  const handleRemoveArticle = (removedArticleUrl: string) => {
    const filteredNews = news.filter(
      (article) => article.url !== removedArticleUrl
    );
    dispatch(setNews(filteredNews));
  };

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
    dispatch(setLoadMore(true));
  };

  const handleLikeArticle = (likedArticleUrl: string) => {
    const copiedNews: IArticle[] = JSON.parse(JSON.stringify(news));
    const updatedNews = copiedNews.map((article) => {
      if (article.url === likedArticleUrl) {
        article.isLiked = !article.isLiked;
      }
      return article;
    });
    dispatch(setNews(updatedNews));
  };

  const renderArticles = useMemo(() => {
    return news?.map((article: IArticle) => (
      <Article
        key={article.url}
        article={article}
        isLikedArticle={false}
        handleLikeArticle={handleLikeArticle}
        handleRemoveArticle={handleRemoveArticle}
      />
    ));
  }, [news]);

  useEffect(() => {
    dispatch(getNews({ lang: languageOfNews, page }));
  }, [page, languageOfNews]);

  return (
    <>
      <NewsPageBox>
        <LoaderWrapper isLoading={loading}>
          <Grid container spacing={4}>
            {renderArticles}
          </Grid>
        </LoaderWrapper>
        {news && newsResponse && news.length < newsResponse.totalResults && (
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
