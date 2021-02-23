import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormInput, useContactHandleSubmit } from './Form.utils';

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

export const MapDataFormFields = ({ url }) => {
  return (
    <div>
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
            {/* DISTRICT NAME */}
            <Form.Group>
              <Form.Label htmlFor='districtName'>District Name</Form.Label>
              <Form.Control
                style={input}
                type='text'
                name='districtName'
                onChange={this.handleChange}
                placeholder='enter district name here'
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW TWO */}
        <div className='row'>
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
          <div className='col-6'>
            {/* DISTRICT STREET ADDRESS */}
            <Form.Group>
              <Form.Label htmlFor='districtStreetAddress'>
                District Street Address
              </Form.Label>
              <Form.Control
                style={input}
                type='text'
                name='districtStreetAddress'
                onChange={this.handleChange}
                placeholder='enter district street address here'
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW THREE */}
        <div className='row'>
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
          <div className='col-6'>
            {/* DISTRICT CITY */}
            <Form.Group>
              <Form.Label htmlFor='districtCity'>District City</Form.Label>
              <Form.Control
                style={input}
                type='text'
                name='districtCity'
                onChange={this.handleChange}
                placeholder='enter district city here'
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW FOUR */}
        <div className='row'>
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
          <div className='col-6'>
            {/* DISTRICT STATE */}
            <Form.Group>
              <Form.Label htmlFor='districtState'>District State</Form.Label>
              <Form.Control
                style={input}
                type='text'
                name='districtState'
                onChange={this.handleChange}
                placeholder='enter district state here'
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW FIVE */}
        <div className='row'>
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
          <div className='col-6'>
            {/* DISTRICT ZIP CODE */}
            <Form.Group>
              <Form.Label htmlFor='districtZipCode'>
                District Zip Code
              </Form.Label>
              <Form.Control
                style={input}
                type='text'
                name='districtZipCode'
                onChange={this.handleChange}
                placeholder='enter district zip code here'
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW SIX */}
        <div className='row'>
          <div className='col-6'>
            {/* LONGITUDE */}
            <Form.Group>
              <Form.Label htmlFor='lon'>Longitude</Form.Label>
              <Form.Control
                style={input}
                type='text'
                name='lon'
                onChange={this.handleChange}
                placeholder='enter longitude here'
              />
            </Form.Group>
          </div>
          <div className='col-6'>
            {/* LATITUDE */}
            <Form.Group>
              <Form.Label htmlFor='lat'>Latitude</Form.Label>
              <Form.Control
                style={input}
                type='text'
                name='lat'
                onChange={this.handleChange}
                placeholder='enter latitude here'
              />
            </Form.Group>
          </div>
        </div>

        <Button id='submitBtn' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};
