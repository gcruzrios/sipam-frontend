import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';

const GoogleMapsPam = () => {

  const [markerPosition, setMarkerPosition] = useState(null);

  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 10, lng: -84
  }

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 10.2,
        lng: -83.5
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 10.5,
        lng: -83

      },
    },
  ];

  function handleMapClick(event) {
    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  }


  return (
    <div>


      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
        onClick={({ lat, lng }) => setMarkerPosition({ lat, lng })}
      >
        {markerPosition && (
          <Marker position={markerPosition} />
        )}
        
      </GoogleMap>

    </div>
  );
};



export default GoogleMapsPam;



