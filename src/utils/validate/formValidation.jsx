import * as yup from "yup";

export const FORM_VALIDATION = yup.object({
  name: yup.string().trim().min(2).max(50).required(),
  lastname: yup.string().trim().min(2).max(60),
  phone: yup
    .string()
    .length(11)
    .matches(/^\+\d{12}$/, "Phone must be: +1111111111"),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Must repeat password")
    .required(),
});
