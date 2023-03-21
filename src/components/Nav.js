//import React from 'react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setMenu(true);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <ul className="navbar-right__menu">
        <li className="nav-search">
          <a href="#" className="search-toggle">
            <i className="uil uil-search"></i>
            <i className="uil uil-times"></i>
          </a>
          <form action="/" className="search-form-topMenu">
            <span className="search-icon uil uil-search"></span>
            <input
              className="form-control me-sm-2 box-shadow-none"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </li>
        {/* <!-- ends: .nav-flag-select --> */}

        {/* <!-- ends: .nav-notification --> */}
        <li className="nav-settings">
          <div className="dropdown-custom">
            <a href="" className="nav-item-toggle">
              <img src="/img/setting.png" alt="setting" />
            </a>
            <div className="dropdown-parent-wrapper">
              <div className="dropdown-wrapper dropdown-wrapper--large">
                <ul className="list-settings">
                  <li className="d-flex">
                    <div className="me-3">
                      <img src="/img/mail.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        <a href="" className="stretched-link">
                          All Features
                        </a>
                      </h6>
                      <p>Introducing Increment subscriptions </p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="me-3">
                      <img src="/img/color-palette.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        <a href="" className="stretched-link">
                          Themes
                        </a>
                      </h6>
                      <p>Third party themes that are compatible</p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="me-3">
                      <img src="/img/home.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        <a href="" className="stretched-link">
                          Payments
                        </a>
                      </h6>
                      <p>We handle billions of dollars</p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="me-3">
                      <img src="/img/video-camera.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        <a href="" className="stretched-link">
                          Design Mockups
                        </a>
                      </h6>
                      <p>Share planning visuals with clients</p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="me-3">
                      <img src="/img/document.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        <a href="" className="stretched-link">
                          Content Planner
                        </a>
                      </h6>
                      <p>Centralize content gethering and editing</p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="me-3">
                      <img src="/img/microphone.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        <a href="" className="stretched-link">
                          Diagram Maker
                        </a>
                      </h6>
                      <p>Plan user flows & test scenarios</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        {/* <!-- ends: .nav-support --> */}

        <li className="nav-author">
          <div className="dropdown-custom">
            <a href="" className="nav-item-toggle">
              <img src="/img/user-mas02.png" alt="" className="rounded-circle" />
              <span className="nav-item__title">
                CONAPAM<i className="las la-angle-down nav-item__arrow"></i>
              </span>
            </a>
            <div className="dropdown-parent-wrapper">
              <div className="dropdown-wrapper">
                <div className="nav-author__info">
                  <div className="author-img">
                    <img
                      src="/img/user-mas02.png"
                      alt=""
                      className="rounded-circle"
                    />
                  </div>
                  <div>
                    <h6>UFO CONAPAM</h6>
                    <span>Administrador</span>
                  </div>
                </div>
                <div className="nav-author__options">
                  <ul>
                    <li>
                      <a href="">
                        <i className="uil uil-user"></i> Profile
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="uil uil-setting"></i>
                        Settings
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <i className="uil uil-bell"></i> Help
                      </a>
                    </li>
                  </ul>
                  <Link
                    className="nav-author__signout"
                    to="/"
                    onClick={() => logout()}
                  >
                    <i className="uil uil-sign-out-alt"></i> Salir
                  </Link>
                  {/* <a href="index.html" className="nav-author__signout">
                                  Sign Out</a> */}
                </div>
              </div>
              {/* <!-- ends: .dropdown-wrapper --> */}
            </div>
          </div>
        </li>
        {/* <!-- ends: .nav-author --> */}
      </ul>
      {/* <!-- ends: .navbar-right__menu --> */}
      <div className="navbar-right__mobileAction d-md-none">
        <a href="#" className="btn-search">
          <img
            src="/img/svg/search.svg"
            alt="search"
            className="svg feather-search"
          />
          <img src="/img/svg/x.svg" alt="x" className="svg feather-x" />
        </a>
        <a href="#" className="btn-author-action">
          <img
            className="svg"
            src="/img/svg/more-vertical.svg"
            alt="more-vertical"
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
