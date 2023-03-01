import React, { FC } from "react";

// helpers
import { useTranslation } from "react-i18next";
import { LogInValidationSchema } from "../../../validation/loginValidationSchema";

// components
import Form from "../../Form/index";
import InnerForm from "./InnerForm";

export interface FormValuesModel {
  username: string;
  password: string;
}

interface IProps {
  initialFormValues: FormValuesModel;
  onSubmit: (values: FormValuesModel) => void;
}

const LogInForm: FC<IProps> = ({ onSubmit, initialFormValues }) => {
  const { t } = useTranslation();
  
  return (
    <Form<FormValuesModel>
      submitText={t("common.login")}
      onSubmit={onSubmit}
      initialValues={initialFormValues}
      validationSchema={LogInValidationSchema}
      renderForm={<InnerForm />}
    />
  );
};

export default LogInForm;
