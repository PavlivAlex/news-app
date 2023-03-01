import React, { useMemo } from "react";

// helpers
import authAPI from "../../api/auth";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { initializeApp } from "../../redux/slices/auth";

//components
import LogInForm, {
  FormValuesModel,
} from "../../components/TemplateForms/Auth";
import { Box, styled, Typography } from "@mui/material";

// styles
import { styles } from "./styles";
import { variables } from "../../assets/styles/variables";

const LogIn = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initialFormValues = useMemo<FormValuesModel>(
    () => ({ username: "", password: "" }),
    []
  );

  const onSubmit = (values: FormValuesModel) => {
    const response = authAPI.logIn(values);
    if (response) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", values.username);
      dispatch(initializeApp());
    }
  };
  return (
    <Box sx={styles}>
      <FormBox>
        <Typography sx={styles.loginText}>{t("login.form_title")}</Typography>
        <LogInForm initialFormValues={initialFormValues} onSubmit={onSubmit} />
      </FormBox>
    </Box>
  );
};

const FormBox = styled(Box)({
  background: variables.white,
  padding: variables.paddingXL,
  borderRadius: variables.defaultBorderRadius,
});

export default LogIn;
