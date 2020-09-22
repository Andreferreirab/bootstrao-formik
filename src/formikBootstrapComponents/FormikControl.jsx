import React from 'react';
import Input from "./formikComponents/Input";
import DatePicker from './formikComponents/DatePicker'
import Select from "./formikComponents/Select";

function FormikControl (props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        case 'select':
            return <Select {...rest} />
        default:
            return null
    }
}

export default FormikControl
