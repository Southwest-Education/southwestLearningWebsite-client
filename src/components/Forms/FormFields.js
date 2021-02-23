import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormInput, useContactHandleSubmit } from './Form.utils';

export const ContactFormFields = ({ url }) => {
  const name = useFormInput('');
  const streetAddress = useFormInput('');
  const city = useFormInput('');
  const state = useFormInput('');
  const zipCode = useFormInput('');
  const email = useFormInput('');
  const role = useFormInput('');
  const phone = useFormInput('');
  const message = useFormInput('');
  const submit = useContactHandleSubmit(url, {
    name: name.value,
    streetAddress: streetAddress.value,
    city: city.value,
    state: state.value,
    zipCode: zipCode.value,
    email: email.value,
    role: role.value,
    phone: phone.value,
    message: message.value,
  });

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
      <Form style={textStyle} variant='bg-light' {...submit}>
        {/* ROW ONE */}
        <div className='row'>
          <div className='col-6'>
            {/* NAME */}
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={input}
                type='text'
                placeholder='enter name here'
                required
                {...name}
              />
            </Form.Group>
          </div>
          <div className='col-6'>
            {/* STREET ADDRESS */}
            <Form.Group>
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                style={input}
                type='text'
                placeholder='enter street address here'
                required
                {...streetAddress}
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW TW0 */}
        <div className='row'>
          <div className='col-6'>
            {/* PHONE */}
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                style={input}
                type='text'
                placeholder='enter phone number here'
                required
                {...phone}
              />
            </Form.Group>
          </div>
          <div className='col-6'>
            {/* CITY */}
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                style={input}
                type='text'
                placeholder='enter city here'
                required
                {...city}
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW THREE */}
        <div className='row'>
          <div className='col-6'>
            {/* EMAIL */}
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={input}
                type='text'
                placeholder='enter email here'
                required
                {...email}
              />
            </Form.Group>
          </div>
          <div className='col-6'>
            {/* STATE */}
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                style={input}
                type='text'
                placeholder='enter state here'
                required
                {...state}
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW FOUR */}
        <div className='row'>
          <div className='col-6'>
            {/* ROLE */}
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                style={input}
                type='text'
                placeholder='enter role here'
                required
                {...role}
              />
            </Form.Group>
          </div>
          <div className='col-6'>
            {/* ZIP CODE */}
            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                style={input}
                type='text'
                placeholder='enter zip code here'
                required
                {...zipCode}
              />
            </Form.Group>
          </div>
        </div>

        {/* MESSAGE */}
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            style={input}
            as='textarea'
            rows={3}
            placeholder='enter your message here'
            required
            {...message}
          />
        </Form.Group>

        <Button id='submitBtn' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};
