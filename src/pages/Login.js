import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../style.css";
import api from "../services/api";
import { useNavigate, Link, useSubmit } from "react-router-dom";

function Login() {
  const submit = useSubmit();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const userRole = localStorage.getItem("userRole");

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await api.post("/auth/login", values);
    } catch (error) {
      setError(error);
    } finally {
      setSubmitting(false);
      console.log(values);
      submit(values, { method: "post" });
      if (userRole === "admin") {
        navigate("admin");
      } else {
        navigate("/");
      }
      resetForm();
    }
  };
  return (
    <div className="login">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <Link className="forgotPassword" to="/forgot-password">
              Forgot password?
            </Link>
            {error && (
              <div className="error">Invalid email address or password</div>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
            <Link to="/register">SIGN UP</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
