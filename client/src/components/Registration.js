import React from 'react';
import formik, { withFormik } from 'formik'
import * as yup from 'yup'

const Registration = ({ errors, touched }) => {
    return(
        <Form>
            <div>
                {touched.username && errors.username && <p>{errors.email}</p>}
                <Field type="text" name="username" placeholder="Username" />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <button>Submit!</button>
        </Form>
    )
}

const FormikRegForm = withFormik({
    mapPropsToValues({ username, password }) {
        return{
            username: username || "",
            password: password || ""
        }
    },

    validationSchema: yup.object().shape({
        username: yup.string()
            .required("Username is required"),
        password: yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required")
    }),

    handleSubmit(values) {
        console.log(values)
    }

})(Registration);

export default FormikRegForm;