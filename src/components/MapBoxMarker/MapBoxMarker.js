import React from 'react';
import { MapDataFormFields } from '../Forms/FormFields';

export const MapBoxMarker = () => {
  return (
    <div>
      <h1>Map Marker Input Form</h1>
      <MapDataFormFields url={'/api/map'} />
    </div>
  );
};

// class MapBoxMarker extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: '',
//       streetAddress: '',
//       city: '',
//       state: '',
//       zipCode: '',
//       districtName: '',
//       districtStreetAddress: '',
//       districtCity: '',
//       districtState: '',
//       districtZipCode: '',
//       lon: '',
//       lat: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       name,
//       streetAddress,
//       city,
//       state,
//       zipCode,
//       districtName,
//       districtStreetAddress,
//       districtCity,
//       districtState,
//       districtZipCode,
//       lon,
//       lat,
//     } = this.state;

//     // Clear form data
//     e.target.reset();

//     await axios.post(url,
//       {
//         name,
//         streetAddress,
//         city,
//         state,
//         zipCode,
//         districtName,
//         districtStreetAddress,
//         districtCity,
//         districtState,
//         districtZipCode,
//         lon,
//         lat,
//       },
//       {
//         headers: {
//           'content-type': 'application/json',
//         },
//       },
//     );
//   };

//
