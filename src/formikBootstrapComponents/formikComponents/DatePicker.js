import React from 'react';
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'
import './ErrorMessage.css'

function ErrorMessageContainer(props) {
return (
    <div className="error">
      {props.children}
    </div>
  )
}

function DatePicker(props) {
  const { label, name, ...rest } = props

  return (
    <div style={{ "marginBottom": "1rem" }}>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field

          return (

            <Form.Group style={{ "marginBottom": 0 }}>
              <Form.Label style={{ 'display': 'block' }}>{label}</Form.Label>
              <DateView
                className={'form-control'}
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={val => setFieldValue(name, val)}
              />
            </Form.Group>
          )
        }}
      </Field>
      <ErrorMessage component={ErrorMessageContainer} name={name} />
    </div>
  )
}

export default DatePicker