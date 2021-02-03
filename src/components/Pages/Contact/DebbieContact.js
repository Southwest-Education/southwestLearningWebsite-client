import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class DebbieContact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      email: '',
      role: '',
      phone: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      streetAddress,
      city,
      state,
      zipCode,
      email,
      role,
      phone,
      message,
    } = this.state;

    // Clear form data
    e.target.reset();

    await axios.post(
      '/app/api/form/debbie',
      {
        name,
        streetAddress,
        city,
        state,
        zipCode,
        email,
        role,
        phone,
        message,
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  };

  render() {
    const textStyle = {
      color: '#7dc70e',
      textAlign: 'center',
      fontWeight: 'bold',
      textStyleType: 'none',
      width: '75%',
      margin: '0 auto',
    };
    const input = {
      textAlign: 'center',
    };
    return (
      <div>
        <h1>Debbie's Contact Form</h1>
        <Form style={textStyle} variant='bg-light' onSubmit={this.handleSubmit}>
          {/* ROW ONE */}
          <div className='row'>
            <div className='col-6'>
              {/* NAME */}
              <Form.Group>
                <Form.Label htmlFor='name'>Name</Form.Label>
                <Form.Control
                  style={input}
                  type='text'
                  name='name'
                  onChange={this.handleChange}
                  placeholder='enter name here'
                />
              </Form.Group>
            </div>
            <div className='col-6'>
              {/* STREET ADDRESS */}
              <Form.Group>
                <Form.Label htmlFor='streetAddress'>Street Address</Form.Label>
                <Form.Control
                  style={input}
                  type='text'
                  name='streetAddress'
                  onChange={this.handleChange}
                  placeholder='enter street address here'
                />
              </Form.Group>
            </div>
          </div>

          {/* ROW TWO */}
          <div className='row'>
            <div className='col-6'>
              {/* PHONE */}
              <Form.Group>
                <Form.Label htmlFor='phone'>Phone</Form.Label>
                <Form.Control
                  style={input}
                  type='text'
                  name='phone'
                  onChange={this.handleChange}
                  placeholder='enter phone number here'
                />
              </Form.Group>
            </div>
            <div className='col-6'>
              {/* CITY */}
              <Form.Group>
                <Form.Label htmlFor='city'>City</Form.Label>
                <Form.Control
                  style={input}
                  type='text'
                  name='city'
                  onChange={this.handleChange}
                  placeholder='enter city here'
                />
              </Form.Group>
            </div>
          </div>

          {/* ROW THREE */}
          <div className='row'>
            <div className='col-6'>
              {/* EMAIL */}
              <Form.Group>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control
                  style={input}
                  type='email'
                  name='email'
                  onChange={this.handleChange}
                  placeholder='enter email here'
                />
              </Form.Group>
            </div>
            <div className='col-6'>
              {/* STATE */}
              <Form.Group>
                <Form.Label htmlFor='state'>State</Form.Label>
                <Form.Control
                  style={input}
                  type='text'
                  name='state'
                  onChange={this.handleChange}
                  placeholder='enter state here'
                />
              </Form.Group>
            </div>
          </div>

          {/* ROW FOUR */}
          <div className='row'>
            <div className='col-6'>
              {/* ROLE */}
              <Form.Group>
                <Form.Label htmlFor='role'>Role</Form.Label>
                <Form.Control
                  style={input}
                  type='text'
                  name='role'
                  onChange={this.handleChange}
                  placeholder='enter role here'
                />
              </Form.Group>
            </div>
            <div className='col-6'>
              {/* ZIP CODE */}
              <Form.Group>
                <Form.Label htmlFor='zipCode'>Zip Code</Form.Label>
                <Form.Control
                  style={input}
                  type='text'
                  name='zipCode'
                  onChange={this.handleChange}
                  placeholder='enter zip code here'
                />
              </Form.Group>
            </div>
          </div>

          {/* MESSAGE */}
          <Form.Group>
            <Form.Label htmlFor='message'>Message</Form.Label>
            <Form.Control
              style={input}
              as='textarea'
              rows={3}
              name='message'
              onChange={this.handleChange}
              placeholder='enter your message here'
            />
          </Form.Group>

          <Button id='submitBtn' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
