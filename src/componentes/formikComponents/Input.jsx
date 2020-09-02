import React from 'react';
import { Form } from "react-bootstrap";
import { Field } from "formik";

function Input(props) {
    const {label, name, ...rest} = props

    return (
        <Field name={name}>
            {({ field, form }) => (

            )}
        </Field>
        
        
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
    )
}

export default Input