import React, { useCallback } from "react";

// helpers
import { Schema } from "yup";

// components
import { Button } from "@mui/material";
import { Form as FormikForm, Formik, FormikHelpers, FormikProps } from "formik";

export interface RequiredPropsForFormModel<Values> {
  initialValues: Values | null;
  onSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) => void | Promise<unknown>;
}
interface FormProps<Values> extends RequiredPropsForFormModel<Values> {
  renderForm:
    | ((form: FormikProps<Values>) => React.ReactNode)
    | React.ReactNode;
  className?: string;
  submitText?: string | null;
  isDisabledFields?: boolean;
  enableReinitialize?: boolean;
  confirmExitWithoutSaving?: boolean;
  validationSchema?: Schema<Values>;
  style?: { [key: string]: string | number };
  innerRef?: React.Ref<FormikProps<Values>>;
  onSave?: () => Promise<void>;
}

function Form<Values = unknown>({
  enableReinitialize = false,
  confirmExitWithoutSaving = false,
  submitText,
  initialValues,
  validationSchema,
  innerRef,
  onSubmit,
  onSave,
  renderForm,
  ...rest
}: FormProps<Values>) {
  const handleSubmit = useCallback(
    async (values: any, formikHelpers: FormikHelpers<any>) => {
      try {
        return await onSubmit(values, formikHelpers);
      } catch (error) {
        console.log(error);
      }
    },
    [onSubmit]
  );

  return (
    <Formik
      innerRef={innerRef}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues || ({} as any)}
      validationSchema={validationSchema}
      enableReinitialize={enableReinitialize}
    >
      {(form: FormikProps<any>) => (
        <FormikForm noValidate {...rest}>
          {typeof renderForm === "function" ? renderForm(form) : renderForm}
          {submitText && <Button type="submit">{submitText}</Button>}
        </FormikForm>
      )}
    </Formik>
  );
}

export default Form;
