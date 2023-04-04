import React from "react";
import Addobs from "./ModalAddobs";
import Paginator from "./Paginator";
import SearchNameObs from "./SearchNameObs";

import SearchNamePam from "./SearchNamePam";
import Tablapam from "./Tablapam";
import TablapamxObs from "./TablapamxObs";

const ListpamObs = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="breadcrumb-main user-member justify-content-sm-between ">
          <SearchNameObs />
          <div className="action-btn">
            <a
              href="#"
              className="btn px-15 btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#new-member"
            >
              <i className="las la-plus fs-16"></i>Agregar PAM
            </a>
            <Addobs />
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="userDatatable global-shadow border-light-0 p-30 bg-white radius-xl w-100 mb-30">
          <div className="table-responsive">
           {/* <Tablapam />  */}
           <TablapamxObs />
        </div>
          <Paginator />
        </div>
      </div>
    </>
  );
};

export default ListpamObs;
