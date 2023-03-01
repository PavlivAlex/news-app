import React from "react";

// helpers
import { useTranslation } from "react-i18next";

// components
import Arrow from "@mui/icons-material/South";
import { Box, styled, Typography } from "@mui/material";

// styles
import { variables } from "../../../assets/styles/variables";

const NoLikedNewsContainer = () => {
  const { t } = useTranslation();

  return (
    <NoDataBox>
      <Typography variant="h4">{t("profile.no_liked_news")}</Typography>
      <Typography fontSize={variables.fontSizeM}>
        {t("profile.if_you_want_like_news")}
      </Typography>
      <ArrowIcon />
    </NoDataBox>
  );
};
const NoDataBox = styled(Box)({
  marginTop: variables.marginXL,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "h4, p": {
    textAlign: "center",
  },
});

const ArrowIcon = styled(Arrow)({
  transform: "scale(2.5)",
  marginTop: variables.marginXL,
});
export default NoLikedNewsContainer;
