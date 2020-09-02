import React from 'react';
import { Form } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <div className="container">
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}


export default App;
