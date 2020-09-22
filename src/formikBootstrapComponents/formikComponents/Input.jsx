import React from 'react';
import { Form } from "react-bootstrap";
import { Field } from "formik";

function Input(props) {
    const { label, name, ...rest } = props

    return (
        <Field name={name}>
            {({ field, form }) => (
                <Form.Group>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control 
                        id={name}
                        isInvalid={form.errors[name] && form.touched[name]}
                        {...rest}
                        {...field}
                    />
                    <Form.Control.Feedback type="invalid">
                        {form.errors[name]}
                    </Form.Control.Feedback>
                </Form.Group>
            )}
        </Field>
    )
}

export default Input