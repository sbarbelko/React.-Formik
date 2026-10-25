import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FORM_VALIDATION } from "../../../utils/validate/formValidation";
import styles from "./ContactForm.module.sass";
import classNames from "classnames";

function ContactForm() {
  const initialValues = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FORM_VALIDATION}
    >
      {(formikProps) => {
        const classGiver = (name) =>
          classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors[name] && formikProps.touched[name],
            [styles.invalid]:
              formikProps.errors[name] && formikProps.touched[name],
          });

        return (
          <Form className={styles.contactForm}>
            <header>CREATE AN ACCOUNT</header>

            <label>
              <span>Your name:</span>
              <Field
                className={classGiver("name")}
                type="text"
                name="name"
                autoFocus
              />
              <ErrorMessage
                className={styles.err}
                name="name"
                component="span"
              />
            </label>
            <label>
              <span>Your lastname:</span>
              <Field
                className={classGiver("lastname")}
                type="text"
                name="lastname"
              />
              <ErrorMessage
                className={styles.err}
                name="lastname"
                component="span"
              />
            </label>
            <label>
              <span>Phone number:</span>
              <Field className={classGiver("phone")} type="tel" name="phone" />
              <ErrorMessage
                className={styles.err}
                name="phone"
                component="span"
              />
            </label>
            <label>
              <span>Email:</span>
              <Field
                className={classGiver("email")}
                type="email"
                name="email"
              />
              <ErrorMessage
                className={styles.err}
                name="email"
                component="span"
              />
            </label>
            <label>
              <span>Password:</span>
              <Field
                className={classGiver("password")}
                type="password"
                name="password"
              />
              <ErrorMessage
                className={styles.err}
                name="password"
                component="span"
              />
            </label>
            <label>
              <span>Passsword confirmation:</span>
              <Field
                className={classGiver("passwordConfirmation")}
                type="password"
                name="passwordConfirmation"
              />
              <ErrorMessage
                className={styles.err}
                name="passwordConfirmation"
                component="span"
              />
            </label>
            <button type="submit">Create account</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
