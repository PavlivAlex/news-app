import * as yup from "yup";

export const LogInValidationSchema = yup.object().shape({
  username: yup
    .string()
    .oneOf(["admin"], "Username is not valid!")
    .required("Username is required!"),
  password: yup
    .string()
    .oneOf(["12345"], "Password is not valid!")
    .required("Password is required!"),
});
