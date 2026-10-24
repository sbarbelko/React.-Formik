import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FORM_VALIDATION } from "../../../utils/validate/formValidation";
import styles from "./ContactForm.module.sass";
import classNames from "classnames";

function ContactForm() {
  const initialValues = { name: "", lastname: "", phone: "", email: "" };

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
        const nameStyle = classNames(styles.input, {
          [styles.valid]: !formikProps.errors.name && formikProps.touched.name,
          [styles.invalid]: formikProps.errors.name && formikProps.touched.name,
        });
        const lastnameStyle = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.lastname && formikProps.touched.lastname,
          [styles.invalid]:
            formikProps.errors.lastname && formikProps.touched.lastname,
        });
        const phoneStyle = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.phone && formikProps.touched.phone,
          [styles.invalid]:
            formikProps.errors.phone && formikProps.touched.phone,
        });
        const emailStyle = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.email && formikProps.touched.email,
          [styles.invalid]:
            formikProps.errors.email && formikProps.touched.email,
        });

        return (
          <Form className={styles.contactForm}>
            <header>CREATE AN ACCOUNT</header>

            <label>
              <span>Your name:</span>
              <Field className={nameStyle} type="text" name="name" autoFocus />
              <ErrorMessage
                className={styles.err}
                name="name"
                component="span"
              />
            </label>
            <label>
              <span>Your lastname:</span>
              <Field className={lastnameStyle} type="text" name="lastname" />
              <ErrorMessage
                className={styles.err}
                name="lastname"
                component="span"
              />
            </label>
            <label>
              <span>Phone number:</span>
              <Field className={phoneStyle} type="tel" name="phone" />
              <ErrorMessage
                className={styles.err}
                name="phone"
                component="span"
              />
            </label>
            <label>
              <span>Email:</span>
              <Field className={emailStyle} type="email" name="email" />
              <ErrorMessage
                className={styles.err}
                name="email"
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
