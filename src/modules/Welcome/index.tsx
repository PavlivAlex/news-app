import React from "react";

// helpers
import { useTranslation } from "react-i18next";

// components
import TopArticle from "./TopArticle";
import LinkToNews from "../../components/LinkToNews";
import { Box, Typography } from "@mui/material";

// styles
import { styles } from "./styles";

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <Box sx={styles}>
      <TopArticle />
      <Typography sx={styles.welcomeText}>
        {t("welcome.welcome_text")}
      </Typography>
      <LinkToNews />
    </Box>
  );
};

export default Welcome;
