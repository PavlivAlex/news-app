import React from "react";

// helpers
import { useTranslation } from "react-i18next";

// components
import topArticleImage from "../../../assets/images/topArticleImage.jpeg";
import { Box, styled, Typography } from "@mui/material";

//styles
import { styles } from "./styles";
import { variables } from "../../../assets/styles/variables";

const TopArticle = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <GrayBlock>
        <img src={topArticleImage} alt="" />
        <Box>
          <Typography sx={styles.firstPartOfTitle} align="right" variant="h3">
            {t("welcome.first_part_of_title")}
          </Typography>
          <Typography align="right" variant="h5" color={variables.dark}>
            {t("welcome.second_part_of_title")}
          </Typography>
        </Box>
      </GrayBlock>
    </Box>
  );
};

const GrayBlock = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#232323",
  background: "linear-gradient(0deg, rgba(255,255,255,1) 50%, #232323 50%)",
  padding: `${variables.paddingL} ${variables.paddingXL}`,
  paddingBottom: 0,
  height: 440,
  color: variables.whiteFont,
});

export default TopArticle;
