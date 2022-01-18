// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validation from "../utils/RegistrationFormValidation";
import { Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom"; // version 5.2.0

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RegistrationForm() {
  let navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    navigate("/nextpage");

    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  };

  return (
    <div>
      <h1>Fake registration form!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validate={validation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Container>
            <Row>
              <Col />
              <Col>
                <Form>
                  <Row className="mt-2">
                    <Field
                      type="input"
                      name="firstName"
                      placeholder="First Name"
                    />
                    <ErrorMessage name="firstName" component="div" />
                  </Row>
                  <Row className="mt-2">
                    <Field
                      type="input"
                      name="lastName"
                      placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName" component="div" />
                  </Row>
                  <Row className="mt-2">
                    <Field
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                    <ErrorMessage name="email" component="div" />
                  </Row>
                  <Row className="mt-2">
                    <Field
                      type="password"
                      name="password"
                      placeholder="xxxxxxxxx"
                    />
                    <ErrorMessage name="password" component="div" />
                    <br />
                  </Row>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    onSubmit={handleSubmit}
                    className="mt-2"
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col />
            </Row>
          </Container>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
