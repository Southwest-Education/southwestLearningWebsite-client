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
