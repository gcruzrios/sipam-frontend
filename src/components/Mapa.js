import React from "react";

const Mapa = () => {
  return (
    <div>
      <div className="dm-page-content">
        <div className="container-fluid">
          <div className="row">
          
            <div className="col-lg-12">
              <div className="card card-default card-md mb-4">
                {/* <div className="card-header">
                  <h6>Google Map Basic</h6>
                </div> */}
                <div className="card-body">
                  <div className="google-map" id="google-map-basic"></div>
                </div>
              </div>
              {/* <!-- ends: .card --> */}
            </div>
            {/* <!-- ends: .col-lg-6 --> */}
            
            
           
          </div>
        </div>
      </div>
      {/* <!-- ends: .dm-page-content --> */}
    </div>
  );
};

export default Mapa;
