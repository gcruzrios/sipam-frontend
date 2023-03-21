import React from "react";

const GoogleMapsPam = () => {
  return (
    <div>
      {/*
      <div className="col-lg-12">
        <div className="card card-default card-md mb-4">
          <div className="card-header">
            <h6>Google Map </h6>
          </div>
          <div className="card-body">
            <div className="google-map" id="google-map-basic"></div>
          </div>
        </div>
       */}

      <div className="col-lg-12">
        <div className="card card-default card-md mb-4">
          <div className="card-header">
            <h6>Leaflet Basic Map</h6>
          </div>
          <div className="card-body">
            <div id="leaflet-basic"></div>
          </div>
        </div>
       
      </div>
      
      {/* <!-- ends: .col-lg-6 --> */}

    </div>
  );
};

export default GoogleMapsPam;

