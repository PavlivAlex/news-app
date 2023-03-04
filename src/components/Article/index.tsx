import React, { FC, memo } from "react";

// helpers
import { IArticle } from "../../interfaces/news";

// components
import NoImage from "@mui/icons-material/SentimentVeryDissatisfied";
import ArticleActionsBlock from "./ArticleActionsBlock";
import ArticleAdditionalInfoBlock from "./ArticleAdditionalInfoBlock";
import { Box, Grid, Paper, Typography, styled } from "@mui/material";

// styles
import { variables } from "../../assets/styles/variables";
import { useDispatch } from "react-redux";
import { likeArticle } from "../../redux/slices/news";

interface IProps {
  index?: number;
  article: IArticle;
  isLikedArticle: boolean;
  handleRemoveArticle?: (articleIndex: number) => void;
  handleLikeArticle?: (articleIndex: number) => void;
}

const Article: FC<IProps> = memo(
  ({
    article,
    index,
    isLikedArticle,
    handleLikeArticle = () => {},
    handleRemoveArticle = () => {},
  }) => {
    const dispatch = useDispatch();
    return (
      <Grid item xs={6}>
        <ArticleBox>
          <Typography variant="h6">{article.title}</Typography>
          <ArticleActionsBlock
            article={article}
            isLikedArticle={isLikedArticle}
            handleLikeArticle={() => dispatch(likeArticle(article._id))}
            // handleLikeArticle={() => index && handleLikeArticle(index)}
            handleRemoveArticle={() => index && handleRemoveArticle(index)}
          />
          <Box sx={{ display: "flex" }}>
            <ImageBox>
              {article.image ? (
                <img src={article.image} alt="icon" />
              ) : (
                <NoImage />
              )}
            </ImageBox>

            <ArticleAdditionalInfoBlock article={article} />
          </Box>
        </ArticleBox>
      </Grid>
    );
  }
);

const ArticleBox = styled(Paper)({
  position: "relative",
  borderLeft: `4px solid ${variables.blue}`,
  borderRadius: 0,
  padding: variables.paddingL,
});

const ImageBox = styled(Box)({
  width: "200px",
  height: "150px",
  "img, svg": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export default Article;
