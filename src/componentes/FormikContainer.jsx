import React from 'react';
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import FormikControl from "./FormikControl";

function FormikContainer() {
    const initialValues = {
        name: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Campo obrigatório')
    })

    function onSubmit (values) {
        console.log(values)
    }

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            { formik => (
                <Form>
                    
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer