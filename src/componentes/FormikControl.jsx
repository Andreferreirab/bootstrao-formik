import React from 'react';
import Input from "./formikComponents/Input";
import DatePicker from './formikComponents/DatePicker'

function FormikControl (props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'date':
            return <DatePicker />
        default:
            return null
    }
}

export default FormikControl
