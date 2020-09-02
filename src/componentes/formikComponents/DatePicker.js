import React from 'react';
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker(props) {
  const { label, name, ...rest } = props

  return (
    <div>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field

          return (
            <Form.Group>
              <Form.Label style={{'display': 'block'}}>{label}</Form.Label>
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
      {/* <ErrorMessage component={Form.Control.Feedback} name={name} /> */}
    </div>
  )
}

export default DatePicker