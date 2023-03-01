import React, { useMemo } from "react";

// helpers
import { IArticle } from "../../interfaces/news";
import { StateModel } from "../../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// components
import Article from "../../components/Article";
import LinkToNews from "../../components/LinkToNews";
import NoLikedNewsContainer from "./NoLikedNewsContainer";
import { Box, styled, Typography, Grid } from "@mui/material";

// styles
import { styles } from "./styles";
import { variables } from "../../assets/styles/variables";

const Profile = () => {
  const { t } = useTranslation();

  const { user } = useSelector((state: StateModel) => state.authReducer);
  const { news } = useSelector((state: StateModel) => state.newsReducer);

  const likedNewsSet = useMemo(() => {
    return new Set<IArticle>(
      news.filter((article: IArticle) => article.isLiked)
    );
  }, [news]);
  const renderArticles = useMemo(() => {
    return (
      likedNewsSet.size &&
      Array.from(likedNewsSet).map((article: IArticle, index: number) => (
        <Article key={index} article={article} isLikedArticle={true} />
      ))
    );
  }, [likedNewsSet]);

  return (
    <Box>
      <Box sx={styles}>
        <ProfileCard>
          {t("profile.account")}: {user}
        </ProfileCard>

        {likedNewsSet?.size ? (
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
