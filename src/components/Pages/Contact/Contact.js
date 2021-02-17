import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './style.css';

class Contact extends Component {
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
      '/api/form',
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

    window.open('/SentMessage');
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
    const centerLine = {
      borderRight: '0.1875rem solid',
      borderRightColor: '#f97c05',
    };
    const input = {
      textAlign: 'center',
    };
    return (
      <div>
        <div className="row">
          {/* LEFT SIDE */}
          <div style={centerLine} className="col-6">
            <h1 className="contactHeader">Contact For More Information</h1>
            <Form
              style={textStyle}
              variant="bg-light"
              onSubmit={this.handleSubmit}
            >
              {/* ROW ONE */}
              <div className="row">
                <div className="col-6">
                  <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                      style={input}
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      placeholder="enter name here"
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  {/* STREET ADDRESS */}
                  <Form.Group>
                    <Form.Label htmlFor="streetAddress">
                      Street Address
                    </Form.Label>
                    <Form.Control
                      style={input}
                      type="text"
                      name="streetAddress"
                      onChange={this.handleChange}
                      placeholder="enter street address here"
                    />
                  </Form.Group>
                </div>
                {/* NAME */}
              </div>

              {/* ROW TW0 */}
              <div className="row">
                <div className="col-6">
                  {/* PHONE */}
                  <Form.Group>
                    <Form.Label htmlFor="phone">Phone</Form.Label>
                    <Form.Control
                      style={input}
                      type="text"
                      name="phone"
                      onChange={this.handleChange}
                      placeholder="enter phone number here"
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  {/* CITY */}
                  <Form.Group>
                    <Form.Label htmlFor="city">City</Form.Label>
                    <Form.Control
                      style={input}
                      type="text"
                      name="city"
                      onChange={this.handleChange}
                      placeholder="enter city here"
                    />
                  </Form.Group>
                </div>
              </div>

              {/* ROW THREE */}
              <div className="row">
                <div className="col-6">
                  {/* EMAIL */}
                  <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      style={input}
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      placeholder="enter email here"
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  {/* STATE */}
                  <Form.Group>
                    <Form.Label htmlFor="state">State</Form.Label>
                    <Form.Control
                      style={input}
                      type="text"
                      name="state"
                      onChange={this.handleChange}
                      placeholder="enter state here"
                    />
                  </Form.Group>
                </div>
              </div>

              {/* ROW FOUR */}
              <div className="row">
                <div className="col-6">
                  {/* ZIP CODE */}
                  <Form.Group>
                    <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
                    <Form.Control
                      style={input}
                      type="text"
                      name="zipCode"
                      onChange={this.handleChange}
                      placeholder="enter zip code here"
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  {/* ROLE */}
                  <Form.Group>
                    <Form.Label htmlFor="role">Role</Form.Label>
                    <Form.Control
                      style={input}
                      type="text"
                      name="role"
                      onChange={this.handleChange}
                      placeholder="enter role here"
                    />
                  </Form.Group>
                </div>
              </div>

              {/* MESSAGE */}
              <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control
                  style={input}
                  as="textarea"
                  rows={3}
                  name="message"
                  onChange={this.handleChange}
                  placeholder="enter your message here"
                />
              </Form.Group>

              <Button id="submitBtn" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-6">
            <h1 className="contactHeader">Address:</h1>
            <a href="https://www.google.com/maps/place/1614+US-281,+Marble+Falls,+TX+78654/@30.5872286,-98.2759144,17z/data=!3m1!4b1!4m5!3m4!1s0x865b1d0285ae51ef:0x905c3a738fb8eed9!8m2!3d30.5872286!4d-98.2737257">
              <h3 hr style={textStyle}>
                1614 US-281 Suite B, Marble Falls, TX 78654
              </h3>
            </a>
            <h1 className="subHeader">Number / Fax</h1>
            <ul style={textStyle}>
              <li>Office: (830)-798-2142</li>
              <li>Toll: (866)-472-6949</li>
              <li>Fax: (830)-693-4169</li>
            </ul>
            <h1 className="subHeader">Social Media</h1>
            <ul>
              <a
                style={textStyle}
                href="https://www.linkedin.com/company/southwest-education-inc/about/"
              >
                <li>LinkedIn</li>
              </a>
              <a style={textStyle} href="https://twitter.com/SouthwestEduca1">
                <li>Twitter</li>
              </a>
              <a style={textStyle} href="/">
                <li>FaceBook</li>
              </a>
            </ul>
          </div>
        </div>
        <hr className="container testimonial" />
      </div>
    );
  }
}

export default Contact;
