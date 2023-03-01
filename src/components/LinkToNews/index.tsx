import React from "react";

// components
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "./styles";
import { CommonRoutesEnum } from "../../router/commonRoutes";
import { useTranslation } from "react-i18next";

const LinkToNews = () => {
  const { t } = useTranslation();
  return (
    <Box sx={styles}>
      <Link to={CommonRoutesEnum.News}>
        <Typography variant="h6">{t("common.link_to_news")}</Typography>
      </Link>
    </Box>
  );
};

export default LinkToNews;
