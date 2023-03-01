import React from "react";

// helpers
import { StateModel } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "../../redux/slices/auth";
import { useTranslation } from "react-i18next";
import { AuthRoutesEnum } from "../../router/authRoutes";
import { ProfileRoutesEnum } from "../../router/profileRoutes";
import { LocalStorageHelpers } from "../../helpers/localStorage";
import { useDispatch, useSelector } from "react-redux";

// components
import Button from "../Button";
import LogoutIcon from "@mui/icons-material/Logout";
import ProfileIcon from "@mui/icons-material/Person2";
import LanguageSwitchComponent from "./LanguageSwitchComponent";
import { AppBar, Box, Typography, styled } from "@mui/material";

// styles
import { styles } from "./styles";
import { variables } from "../../assets/styles/variables";

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: StateModel) => state.authReducer.user);

  const handleLogout = () => {
    LocalStorageHelpers.logout();
    dispatch(initializeApp());
  };

  return (
    <AppBar sx={styles}>
      <Typography variant="h5">{t("header.title")}</Typography>
      <>
        <LanguageSwitchComponent />
        {user ? (
          <Box sx={styles.userInfoBlock}>
            <Typography>
              {t("common.hello")} {user}!
            </Typography>
            <IconBox onClick={() => navigate(ProfileRoutesEnum.Profile)}>
              <ProfileIcon color="action" />
            </IconBox>
            <IconBox onClick={handleLogout}>
              <LogoutIcon color="action" />
            </IconBox>
          </Box>
        ) : (
          <Button onClick={() => navigate(AuthRoutesEnum.LogIn)}>
            {t("common.login")}
          </Button>
        )}
      </>
    </AppBar>
  );
};

const IconBox = styled(Box)({
  marginLeft: variables.marginM,
  cursor: "pointer",
});

export default Header;
