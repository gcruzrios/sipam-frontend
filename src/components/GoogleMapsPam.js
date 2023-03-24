import React,{ useState } from "react";
import { GoogleMap, useJsApiLoader, LoadScript, Marker} from '@react-google-maps/api';


const GoogleMapsPam = () => {

  //const [markerPosition, setMarkerPosition] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({
    lat: 10, lng: -84
  });

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 10, lng: -84
  }

  function handleMapClick(event) {
    markerPosition.lat=10
    markerPosition.lat=-84
    
    setMarkerPosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
    });
    console.log(markerPosition.lat);
    console.log(markerPosition.lng);

    localStorage.setItem('Coordenadas', markerPosition);
}
 
    
  return (
    <div>
     

     <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
          onClick={handleMapClick}
          >
         { 

          markerPosition && (
          <Marker position={markerPosition} />
          // <Marker title={markerPosition.lat.toString() +","+markerPosition.lng.toString()} position={markerPosition} />
          // 
          )
          
            }
         
         
         
     </GoogleMap>

    </div>
  );
};

export default GoogleMapsPam;



