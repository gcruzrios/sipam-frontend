import React from "react";

const TabsPam = () => {
  return (
    <>
      <div className="ap-tab-wrapper border-bottom ">
        <ul
          className="nav px-30 ap-tab-main text-capitalize"
          id="v-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="v-home-tab"
              data-bs-toggle="pill"
              href="#v-home"
              role="tab"
              aria-selected="true"
            >
              <img src="/img/svg/user-check.svg" alt="user" className="svg" />
              Información Personal
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="v-profile-tab"
              data-bs-toggle="pill"
              href="#v-profile"
              role="tab"
              aria-selected="false"
            >
              <img src="/img/svg/profit2.svg" alt="briefcase" className="svg" />
              Información Socioeconómica
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link"
              id="v-messages-tab"
              data-bs-toggle="pill"
              href="#v-messages"
              role="tab"
              aria-selected="false"
            >
              <img src="/img/svg/share-2.svg" alt="share-2" className="svg" />
              Información Social
            </a>
          </li> */}
          <li className="nav-item">
            <a
              className="nav-link"
              id="v-maps-tab"
              data-bs-toggle="pill"
              href="#v-maps"
              role="tab"
              aria-selected="false"
            >
              <img src="/img/svg/map-pin.svg" alt="share-2" className="svg" />
              Información Geográfica
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TabsPam;
