import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// TODO: import useFormik from formik library

function App() {
  //define the validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Username should be an email")
      .required("Field required"),
    password: Yup.string().required("Field required"),
  });
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("Login Successful");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="emailField">Email Address</label>
        <input
          id="emailField"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div id="emailError">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="pswField">Password</label>
        <input
          id="pswField"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div id="pswError">{formik.errors.password}</div>
        ) : null}
      </div>

      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
