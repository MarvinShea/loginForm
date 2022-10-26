import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: values => {
      setTimeout(() => alert("Login Successful"), 500)
    },

    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      };
      if (!values.password) {
        errors.password = 'Field required';
      }
      return errors;
    }
  });

  return (
    < div >
      <form onSubmit={formik.handleSubmit}>

        <div>Email:</div>
        <input type="email" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email && formik.touched.email ? <div id="emailError" style={{ color: 'red' }}>{formik.errors.email}</div> : null}

        <div>Password:</div>
        <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password} /><br />
        {formik.errors.password && formik.touched.password ? <div id="pswError" style={{ color: 'red' }}>{formik.errors.password}</div> : null}

        <button id="submitBtn" type="submit" >Submit</button>

      </form>
    </div >
  );
}

export default App;
