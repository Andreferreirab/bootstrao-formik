import React from 'react';
import Select from 'react-select'
import { Field, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";

import './ErrorMessage.css'

function ErrorMessageContainer(props) {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

function SelectForm(props) {
    const { label, name, options, isMulti, ...rest } = props



    return (
        <div style={{ "marginBottom": "1rem" }}>
            <Field name={name}>
                {({ form, field }) => {
                    const { setFieldValue, setFieldTouched } = form
                    const { value } = field

                    const onChange = (option) => {
                        if (option === null) {
                            option = []
                        }
                        setFieldValue(
                            name,
                            isMulti
                                ? option.map((item) => item.value)
                                : option.value
                        );
                    };

                    const onBlur = () => {
                        setFieldTouched(name)
                    }

                    const getValue = () => {
                        if (options) {
                            return isMulti
                                ? options.filter(option => value.indexOf(option.value) >= 0)
                                : options.find(option => option.value === value);
                        } else {
                            return isMulti ? [] : "";
                        }
                    };

                    return (
                        <Form.Group style={{ "marginBottom": 0 }}>
                            <Form.Label>{label}</Form.Label>
                            <Select
                                id={name}
                                options={options}
                                {...rest}
                                {...field}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={getValue()}
                                isMulti={isMulti}
                            />
                        </Form.Group>
                    )
                }}
            </Field>
            <ErrorMessage component={ErrorMessageContainer} name={name} />

        </div>
    );
}

export default SelectForm;