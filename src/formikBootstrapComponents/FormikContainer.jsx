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
        beginTime: null,
        selection: [],
    }

    const validationSchema = Yup.object({
        teste: Yup.string().required('Campo obrigatório'),
        beginDate: Yup.date().required('Campo Obrigatório').nullable(),
        beginTime: Yup.date().required('Campo Obrigatório').nullable(),
        selection: Yup.array().required('Campo Obrigatório')
    })

    const selectOptions = [
        {value: 'Option 1', label: 'Opção 1'},
        {value: 'Option 2', label: 'Opção 2'},
        {value: 'Option 3', label: 'Opção 3'},
        {value: 'Option 4', label: 'Opção 4'},
    ]

    function onSubmit(values) {
        
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl
                        control='input'
                        name='teste'
                        label='teste'
                        placeholder='teste'
                        type='text'
                    />
                    <FormikControl
                        control='date'
                        name='beginDate'
                        label='Data de Início'
                        dateFormat='dd/MM/yyyy'
                    />
                    <FormikControl
                        control='date'
                        name='beginTime'
                        label='Hora de Início'
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Hora"
                        dateFormat="h:mm aa"
                    />

                    <FormikControl 
                        control='select'
                        name='selection'
                        label='Seletor'
                        options={selectOptions}
                        placeholder='Selecione o professor da disciplina...'
                        isMulti={true}
                    />
                    <Button type='submit'>Submit</Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer