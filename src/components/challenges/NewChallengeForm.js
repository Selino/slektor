import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { withFormik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const FormComp = ({ values, errors, touched }) => {
  return (
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type='email' name='email' placeholder='Email' />
      </div>

      <Button type='submit'>Save</Button>
      <Link
        style={{ marginLeft: ".5rem" }}
        to={{
          pathname: "/dashboard",
        }}
      >
        <Button variant='secondary'>Cancel</Button>
      </Link>
    </Form>
  )
}

const NewChallengeForm = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "premium",
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email.")
      .required("Email is required."),
    password: Yup.string()
      .min(9, "Password must be 9 characters or more.")
      .required("Password is required."),
  }),
  handleSubmit(values) {
    console.log(values)
  },
})(FormComp)

export default NewChallengeForm
