import React from "react";
import { GoogleMap, useJsApiLoader, LoadScript, Marker} from '@react-google-maps/api';


const GoogleMapsPam = () => {

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
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
  return (
    <div>
     

     <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={defaultCenter}>
         { 
         
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         
         }
         
     </GoogleMap>

    </div>
  );
};

export default GoogleMapsPam;







// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// ​
// export const MapContainer = () => {
  
//   const locations = [
//     {
//       name: "Location 1",
//       location: { 
//         lat: 41.3954,
//         lng: 2.162 
//       },
//     },
//     {
//       name: "Location 2",
//       location: { 
//         lat: 41.3917,
//         lng: 2.1649
//       },
//     },
//     {
//       name: "Location 3",
//       location: { 
//         lat: 41.3773,
//         lng: 2.1585
//       },
//     },
//     {
//       name: "Location 4",
//       location: { 
//         lat: 41.3797,
//         lng: 2.1682
//       },
//     },
//     {
//       name: "Location 5",
//       location: { 
//         lat: 41.4055,
//         lng: 2.1915
//       },
//     }
//   ];
  
//   return (
//   ...
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={13}
//           center={defaultCenter}>
//          {
//             locations.map(item => {
//               return (
//               <Marker key={item.name} position={item.location}/>
//               )
//             })
//          }
//      </GoogleMap>
//   )
// }



// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// ​
// export const MapContainer = () => {
//   const [ selected, setSelected ] = useState({});
  
//   const onSelect = item => {
//     setSelected(item);
//   }
//   ...
//     return (
//     ...
//          {
//             locations.map(item => {
//               return (
//               <Marker key={item.name} 
//                 position={item.location}
//                 onClick={() => onSelect(item)}
//               />
//               )
//             })
//          }
//         {
//             selected.location && 
//             (
//               <InfoWindow
//               position={selected.location}
//               clickable={true}
//               onCloseClick={() => setSelected({})}
//             >
//               <p>{selected.name}</p>
//             </InfoWindow>
//             )
//          }
//      </GoogleMap>
//     )
// }