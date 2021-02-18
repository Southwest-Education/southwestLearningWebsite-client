import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const KevinContact = () => {
  const [name, setName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);

    let res = await axios.post(
      'api/form/kevin',
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

    setName('');
    setStreetAddress('');
    setCity('');
    setState('');
    setZipCode('');
    setEmail('');
    setRole('');
    setPhone('');
    setMessage('');

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
  const input = {
    textAlign: 'center',
  };

  return (
    <div>
      <h1 className="contactHeader">Kevins's Contact Form</h1>
      <Form style={textStyle} variant="bg-light" onSubmit={handleSubmit}>
        {/* ROW ONE */}
        <div className="row">
          <div className="col-6">
            {/* NAME */}
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={input}
                type="text"
                value={name}
                placeholder="enter name here"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            {/* STREET ADDRESS */}
            <Form.Group>
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                style={input}
                type="text"
                value={streetAddress}
                placeholder="enter street address here"
                required
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW TW0 */}
        <div className="row">
          <div className="col-6">
            {/* PHONE */}
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                style={input}
                type="text"
                value={phone}
                placeholder="enter phone number here"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            {/* CITY */}
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                style={input}
                type="text"
                value={city}
                placeholder="enter city here"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW THREE */}
        <div className="row">
          <div className="col-6">
            {/* EMAIL */}
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={input}
                type="text"
                value={email}
                placeholder="enter email here"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            {/* STATE */}
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                style={input}
                type="text"
                value={state}
                placeholder="enter state here"
                required
                onChange={(e) => setState(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>

        {/* ROW FOUR */}
        <div className="row">
          <div className="col-6">
            {/* ROLE */}
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                style={input}
                type="text"
                value={role}
                placeholder="enter role here"
                required
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-6">
            {/* ZIP CODE */}
            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                style={input}
                type="text"
                value={zipCode}
                placeholder="enter zip code here"
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
            as="textarea"
            rows={3}
            value={message}
            placeholder="enter your message here"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button id="submitBtn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <hr className="container testimonial" />
    </div>
  );
};

export default KevinContact;
