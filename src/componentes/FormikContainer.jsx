import React from 'react';
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import FormikControl from "./FormikControl";
import { Button } from 'react-bootstrap'
import moment from 'moment'

function FormikContainer() {
    const initialValues = {
        teste: '',
        beginDate: null,
    }

    const validationSchema = Yup.object({
        teste: Yup.string().required('Campo obrigatório'),
        beginDate: Yup.date().required('Campo Obrigatório').nullable()
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
                    <FormikControl
                        control='input'
                        name='teste'
                        label = 'teste'
                        placeholder='teste'
                        type='text'
                    />
                    <FormikControl
                        control='date'
                        name='beginDate'
                        label='Data de Início'
                        // dateFormat='dd/MM/yyyy'
                    />

                    <Button type='submit'>Submit</Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer