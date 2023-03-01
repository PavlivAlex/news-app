import React from "react";

// helpers
import { useTranslation } from "react-i18next";

// components
import Input from "../../../Input";
import FormField from "../../../FormField";

const InnerForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <FormField
        name="username"
        placeholder={t("login.login_form.username")}
        component={Input}
      />

      <FormField
        name="password"
        placeholder={t("login.login_form.password")}
        component={Input}
        additionalProps={{ type: "password" }}
      />
    </>
  );
};

export default InnerForm;
