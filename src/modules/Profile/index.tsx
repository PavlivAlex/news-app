import React, { useMemo } from "react";

// helpers
import newsAPI from "../../api/news";
import { useFetch } from "../../hooks/useFetch";
import { IArticle } from "../../interfaces/news";
import { StateModel } from "../../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// components
import Article from "../../components/Article";
import LinkToNews from "../../components/LinkToNews";
import LoaderWrapper from "../../components/LoaderWrapper";
import NoLikedNewsContainer from "./NoLikedNewsContainer";
import { Box, styled, Typography, Grid } from "@mui/material";

// styles
import { styles } from "./styles";
import { variables } from "../../assets/styles/variables";

const Profile = () => {
  const { t } = useTranslation();

  const { user } = useSelector((state: StateModel) => state.authReducer);
  const { languageOfNews } = useSelector(
    (state: StateModel) => state.newsReducer
  );

  const { response, loading } = useFetch(
    () => newsAPI.getLikedNews({ lang: languageOfNews }),
    [languageOfNews]
  );

  const renderArticles = useMemo(() => {
    return (
      <LoaderWrapper isLoading={loading}>
        {response?.data.articles.length &&
          response.data.articles.map((article: IArticle) => (
            <Article
              key={article._id}
              article={article}
              isLikedArticle={true}
            />
          ))}
      </LoaderWrapper>
    );
  }, [response, loading]);

  return (
    <Box>
      <Box sx={styles}>
        <ProfileCard>
          {t("profile.account")}: {user}
        </ProfileCard>

        {response?.data.articles.length ? (
          <>
            <Typography align="center" variant="h5">
              {t("profile.your_liked_news")}:
            </Typography>
            <Grid container spacing={4}>
              {renderArticles}
            </Grid>
          </>
        ) : (
          <NoLikedNewsContainer />
        )}
      </Box>
      <LinkToNews />
    </Box>
  );
};

const ProfileCard = styled(Box)({
  borderRadius: variables.defaultBorderRadius,
  padding: variables.paddingM,
  background: variables.gray,
  marginBottom: variables.marginM,
});

export default Profile;
