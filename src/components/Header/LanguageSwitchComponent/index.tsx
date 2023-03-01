import React, { useState, useEffect } from "react";

// helpers
import { useDispatch } from "react-redux";
import { LanguageEnum } from "../../../interfaces/common";
import { useTranslation } from "react-i18next";
import { setLanguageOfNews } from "../../../redux/slices/news";

// components
import UAFlagIcon from "../../../assets/images/UAFlag.png";
import ENFlagIcon from "../../../assets/images/USFlag.png";
import { Box, styled } from "@mui/material";

// styles
import { styles } from "./styles";
import { variables } from "../../../assets/styles/variables";

const activeStyles: any = {
  color: variables.blue,
  fontWeight: variables.boldFont,
};

const LanguageSwitchComponent = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState("");

  const handleLanguageChange = (lang: LanguageEnum) => {
    i18n.changeLanguage(lang);
    dispatch(setLanguageOfNews(lang));
  };

  const handleChangeLanguageClick = (lang: LanguageEnum) => {
    handleLanguageChange(lang);
    setIsActive(lang);
  };

  useEffect(() => {
    const language = localStorage.getItem("lang");
    if (language) {
      setIsActive(language);
    } else {
      setIsActive(LanguageEnum.EN);
    }
  }, []);

  return (
    <Box sx={styles}>
      <LanguageSwitchButton
        sx={isActive === LanguageEnum.UA && activeStyles}
        onClick={() => handleChangeLanguageClick(LanguageEnum.UA)}
      >
        <FlagBox>
          <img src={UAFlagIcon} alt={LanguageEnum.UA} />
        </FlagBox>
        UA
      </LanguageSwitchButton>
      <LanguageSwitchButton
        sx={isActive === LanguageEnum.EN && activeStyles}
        onClick={() => handleChangeLanguageClick(LanguageEnum.EN)}
      >
        <FlagBox>
          <img src={ENFlagIcon} alt={LanguageEnum.EN} />
        </FlagBox>
        EN
      </LanguageSwitchButton>
    </Box>
  );
};

const FlagBox = styled(Box)({
  display: "flex",
  width: "20px",
  height: "20px",
  margin: variables.marginS,
  "img, svg": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const LanguageSwitchButton = styled(Box)({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  "&:hover": {
    color: variables.blue,
  },
});

export default LanguageSwitchComponent;
