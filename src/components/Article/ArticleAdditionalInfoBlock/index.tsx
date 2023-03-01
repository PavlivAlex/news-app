import React, { FC } from "react";

// helpers
import { IArticle } from "../../../interfaces/news";
import { convertTime } from "../../../helpers/time";
import { useTranslation } from "react-i18next";

// components
import { Link } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";

// styles
import { variables } from "../../../assets/styles/variables";

interface IProps {
  article: IArticle;
}

const ArticleAdditionalInfoBlock: FC<IProps> = ({ article }) => {
  const { t } = useTranslation();
  return (
    <AdditionalInfoBlock>
      <Link to={article.url} target="_blank">
        {t("news.check_source")}
      </Link>
      <Box>
        <Typography>
          {t("news.posted_by")}
          <Typography fontWeight={variables.boldFont} component="span">
            {article.source.name}
          </Typography>
        </Typography>
        <Typography>
          {t("news.published_at")}
          <Typography fontWeight={variables.boldFont} component="span">
            {convertTime(article.publishedAt)}
          </Typography>
        </Typography>
      </Box>
    </AdditionalInfoBlock>
  );
};

const AdditionalInfoBlock = styled(Box)({
  width: "100%",
  marginLeft: variables.marginM,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export default ArticleAdditionalInfoBlock;
