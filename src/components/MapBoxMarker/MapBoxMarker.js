import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './style.css';

class MapBoxMarker extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      districtName: '',
      districtStreetAddress: '',
      districtCity: '',
      districtState: '',
      districtZipCode: '',
      lon: '',
      lat: '',
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
      districtName,
      districtStreetAddress,
      districtCity,
      districtState,
      districtZipCode,
      lon,
      lat,
    } = this.state;

    // Clear form data
    e.target.reset();

    await axios.post(
      '/app/api/map',
      {
        name,
        streetAddress,
        city,
        state,
        zipCode,
        districtName,
        districtStreetAddress,
        districtCity,
        districtState,
        districtZipCode,
        lon,
        lat,
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
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
        <h1>Map Marker Input Form</h1>
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
  }
}

export default MapBoxMarker;
