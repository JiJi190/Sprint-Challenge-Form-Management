import React from 'react';
import formik, { withFormik } from 'formik'
import * as yup from 'yup'

const Registration = () => {
    return(
        <Form>
            <Field type="text" name="username" placeholder="Username" />
            <Field type="password" name="password" placeholder="Password" />
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
            .required(),
        password: yup.string()
            .min(6)
            .required()
    }),

    handleSubmit(values) {
        console.log(values)
    }

})(Registration);

export default FormikRegForm;