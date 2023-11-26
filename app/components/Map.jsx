// Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '496px',
  height: '553px', // Set the height as per your requirement
};

const center = {
  lat: 10.870066465839946,  
  lng: 106.80307121092247, 
};

const Map = ({
    selectedType,
    selectedCategory,
    selectedProvince,
    selectedDistrict,
    selectedWard,
    street,
  }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCzSUb3NhrqDZx8HznTB07xGty5oAwY53Q">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
