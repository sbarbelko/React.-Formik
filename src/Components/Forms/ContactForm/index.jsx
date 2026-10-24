import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FORM_VALIDATION } from "../../../utils/validate/formValidation";

function ContactForm() {
  const initialValues = { name: "", lastname: "", phone: "", email: "" };

  const handleSubmit = (values, formikBag) => {
    console.log("values", values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FORM_VALIDATION}
    >
      {(formikProps) => {
        return (
          <Form>
            <label>
              <span></span>
              <Field />
              <ErrorMessage />
            </label>
            <button type="submit">Create account</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
