import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
import { Redirect, withRouter } from 'react-router-dom'


class CustomForm extends Component {

  submitForm = (e, type, id) => {

    switch (type) {
      case 'post':
        e.preventDefault();
        console.log('post')
        axios.post('http://127.0.0.1:8000/api/talks/', {
          title: e.target.elements.title.value,
          message: e.target.elements.message.value
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.props.history.push('/');
        break;

      case 'update':
        axios.put(`http://127.0.0.1:8000/api/talks/${id}/`, {
          title: e.target.elements.title.value,
          message: e.target.elements.message.value
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        break;
    }
  }

  render() {
    return(
      <div className="wrapper">
        <Form className="form" onSubmit={(e) => {this.submitForm(e, this.props.type, this.props.id)}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" placeholder="Enter Title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Talk</Form.Label>
            <Form.Control name="message" as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }

}
export default withRouter(CustomForm);
