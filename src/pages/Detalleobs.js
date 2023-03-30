import React, { useState } from "react";

import { Link } from "react-router-dom";

import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";


import Sidebar from "../components/Sidebar";
import MobileSearch from "../components/MobileSearch.js";


import FichaPam from "../components/FichaPam.js";
import FichaObs from "../components/FichaObs.js";

const Detalleobs = () => {
  return (
    <div>
     <MobileSearch />
      <header className="header-top">
        <nav className="navbar navbar-light">
          <div className="navbar-left">
            <div className="logo-area">
              <a className="navbar-brand" href="/">
                <img className="dark" src="/img/logo-white.png" alt="logo" />
                <img className="light" src="/img/logo-white.png" alt="logo" />
              </a>
              <a href="#" className="sidebar-toggle">
                <img
                  className="svg"
                  src="/img/svg/align-center-alt.svg"
                  alt="img"
                />
              </a>
            </div>
            <div className="top-menu">
              <div className="hexadash-top-menu position-relative"></div>
             
            </div>
          </div>
          {/* <!-- ends: navbar-left --> */}

          <div className="navbar-right">
            {/* <!-- navigation nav.js --> */}
            <Nav />
          </div>
          {/* <!-- ends: .navbar-right --> */}
        </nav>
      </header>
      <main className="main-content">
        <div className="sidebar-wrapper">
          <div className="sidebar sidebar-collapse" id="sidebar">
          <Sidebar />
          </div>
        </div>
       

        <div className="contents">
          {/* <!-- Home.js --> */}
         
          {/* <Detallepam/> */}
          <FichaObs/>
        </div>
        <Footer />
        {/* <!-- Footer.js --> */}
      </main>
      <div id="overlayer">
        <div className="loader-overlay">
          <div className="dm-spin-dots spin-lg">
            <span className="spin-dot badge-dot dot-primary"></span>
            <span className="spin-dot badge-dot dot-primary"></span>
            <span className="spin-dot badge-dot dot-primary"></span>
            <span className="spin-dot badge-dot dot-primary"></span>
          </div>
        </div>
      </div>
      <div className="overlay-dark-sidebar"></div>
      <div className="customizer-overlay"></div>
    </div>
  );
};

export default Detalleobs;

