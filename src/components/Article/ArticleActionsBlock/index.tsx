import React, { FC } from "react";

// helpers
import { IArticle } from "../../../interfaces/news";
import { StateModel } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AuthRoutesEnum } from "../../../router/authRoutes";

// components
import Like from "../../Like";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { Box, styled } from "@mui/material";

// styles
import { styles } from "./styles";

interface IProps {
  article: IArticle;
  isLikedArticle: boolean;
  handleLikeArticle?: (articleUrl: string) => void;
  handleRemoveArticle?: (articleUrl: string) => void;
}

const ArticleActionsBlock: FC<IProps> = ({
  article,
  isLikedArticle,
  handleLikeArticle = () => {},
  handleRemoveArticle = () => {},
}) => {
  const { t } = useTranslation();
  const { isAuthorized } = useSelector(
    (state: StateModel) => state.authReducer
  );
  return isAuthorized ? (
    <Box>
      {!isLikedArticle && (
        <Box sx={styles.svgStyles}>
          <Box onClick={() => handleLikeArticle(article.url)}>
            <Like isLiked={!!article.isLiked} />
          </Box>

          <Box onClick={() => handleRemoveArticle(article.url)}>
            <ClearIcon />
          </Box>
        </Box>
      )}
    </Box>
  ) : (
    <LinkToLogIn to={AuthRoutesEnum.LogIn}>
      {t("news.link_for_actions")}
    </LinkToLogIn>
  );
};

const LinkToLogIn = styled(Link)({
  position: "absolute",
  top: 5,
  right: 20,
});

export default ArticleActionsBlock;
