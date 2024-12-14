import React from "react";
import "./Footer.css";
import Logo from "../../assest/Logo.svg";
import Discord from "../../assest/Discord.png";
import Teligram from "../../assest/Teligram.png";
import Twitter from "../../assest/Twitter.png";
import Instagram from "../../assest/Instagram.png";
const Footer = () => {
  return (
    <footer className="pt-5">
      <div style={{ backgroundColor: "#464343", paddingTop: "30px" }}>
        <div className="d-flex align-items-center justify-content-center">
          <div
            className="mb-3 footer-input"
            style={{ width: "400px", borderRadius: "4px", padding: "10px" }}
          >
            <div className="d-flex align-items-end justify-content-end flex-column flex-sm-row w-100 gap-2">
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                style={{ position: "relative" }}
              />
              <button
                className="btn"
                type="button"
                style={{
                  position: "absolute",
                  backgroundColor: "#F2AA4C",
                  color: "#ffffff",
                  width: "150px",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="row d-flex align-items-start justify-content-start ps-4 pr-4 w-100">
          <div className="col-6 col-md-3 " style={{ marginTop: "120px" }}>
            <h5>FAQ</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2" style={{ color: "white" }}>
                <a href="#" className="nav-link p-0" style={{ color: "white" }}>
                  Contact Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0" style={{ color: "white" }}>
                  About Cineflicks
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3" style={{ marginTop: "120px" }}>
            <h5>My Account</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "white" }}
                >
                  Premium Upgrades
                </a>
              </li>

              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "white" }}
                >
                  Plans & Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3" style={{ marginTop: "120px" }}>
            <h5>Supported Devices</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "white" }}
                >
                  Press
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 "
                  style={{ color: "white" }}
                >
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 " style={{ marginTop: "120px" }}>
            <img
              src={Logo}
              alt="logo"
              className="footer-logo"
            />
          </div>

          <div className="col-6 col-md-1 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <img
                  src={Discord}
                  alt="logo"
                  className="social-logo"
                />
              </li>
              <li className="nav-item mb-2">
                <img
                  src={Teligram}
                  alt="logo"
                  className=""
                  style={{ width: "60px", height: "50px" }}
                />
              </li>
              <li className="nav-item mb-2">
                <img
                  src={Twitter}
                  alt="logo"
                  className="social-logo"
                />
              </li>
              <li className="nav-item mb-2">
                <img src={Instagram} alt="logo" className="social-logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center copy-right">
        <span>© 2024 Cineflicks All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
