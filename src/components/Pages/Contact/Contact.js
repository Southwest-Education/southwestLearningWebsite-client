import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './style.css';

const Contact = () => {
  const name = useFormInput('');
  const streetAddress = useFormInput('');
  const city = useFormInput('');
  const state = useFormInput('');
  const zipCode = useFormInput('');
  const email = useFormInput('');
  const role = useFormInput('');
  const phone = useFormInput('');
  const message = useFormInput('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);

    let res = await axios.post(
      'api/form',
      {
        name: name.value,
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

    window.open(res.data, '_self');
  };

  const textStyle = {
    color: '#7dc70e',
    textAlign: 'center',
    fontWeight: 'bold',
    textStyleType: 'none',
    width: '75%',
    margin: '0 auto',
  };
  const centerLine = {
    borderRight: '0.1875rem solid',
    borderRightColor: '#f97c05',
  };
  const input = {
    textAlign: 'center',
  };
  return (
    <div>
      <div className='row'>
        {/* LEFT SIDE */}
        <div style={centerLine} className='col-6'>
          <h1 className='contactHeader'>Contact For More Information</h1>
          <Form style={textStyle} variant='bg-light' onSubmit={handleSubmit}>
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
                    value={streetAddress}
                    placeholder='enter street address here'
                    required
                    onChange={(e) => setStreetAddress(e.target.value)}
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
                    value={phone}
                    placeholder='enter phone number here'
                    required
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={city}
                    placeholder='enter city here'
                    required
                    onChange={(e) => setCity(e.target.value)}
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
                    value={email}
                    placeholder='enter email here'
                    required
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={state}
                    placeholder='enter state here'
                    required
                    onChange={(e) => setState(e.target.value)}
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
                    value={role}
                    placeholder='enter role here'
                    required
                    onChange={(e) => setRole(e.target.value)}
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
                    value={zipCode}
                    placeholder='enter zip code here'
                    required
                    onChange={(e) => setZipCode(e.target.value)}
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
                value={message}
                placeholder='enter your message here'
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button id='submitBtn' variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>

        {/* RIGHT SIDE */}
        <div className='col-6'>
          <h1 className='contactHeader'>Address:</h1>
          <a href='https://www.google.com/maps/place/1614+US-281,+Marble+Falls,+TX+78654/@30.5872286,-98.2759144,17z/data=!3m1!4b1!4m5!3m4!1s0x865b1d0285ae51ef:0x905c3a738fb8eed9!8m2!3d30.5872286!4d-98.2737257'>
            <h3 hr style={textStyle}>
              1614 US-281 Suite B, Marble Falls, TX 78654
            </h3>
          </a>
          <h1 className='subHeader'>Number / Fax</h1>
          <ul style={textStyle}>
            <li>Office: (830)-798-2142</li>
            <li>Toll: (866)-472-6949</li>
            <li>Fax: (830)-693-4169</li>
          </ul>
          <h1 className='subHeader'>Social Media</h1>
          <ul>
            <a
              style={textStyle}
              href='https://www.linkedin.com/company/southwest-education-inc/about/'
            >
              <li>LinkedIn</li>
            </a>
            <a style={textStyle} href='https://twitter.com/SouthwestEduca1'>
              <li>Twitter</li>
            </a>
            <a style={textStyle} href='/'>
              <li>FaceBook</li>
            </a>
          </ul>
        </div>
      </div>
      <hr className='container testimonial' />
    </div>
  );
};

export default Contact;

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
