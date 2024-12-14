import React from "react";
import "./header.css";
import Logo from "../../assest/Logo.svg";
import accountIcon from "../../assest/account-icon.png";
import menu from "../../assest/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faWallet } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={Logo} alt="logo" className="navbar-logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link ms-2 me-2"
                  aria-current="page"
                  href="#"
                  style={{ color: "#ffffff" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item ms-2 me-2">
                <a
                  className="nav-link active"
                  href="#"
                  style={{ color: "#F2AA4C", fontWeight: "400" }}
                >
                  Movies
                </a>
              </li>
              <li className="nav-item ms-2 me-2">
                <a className="nav-link" href="#" style={{ color: "#ffffff" }}>
                  Web Series
                </a>
              </li>
              <li className="nav-item ms-2 me-2">
                <a className="nav-link" href="#" style={{ color: "#ffffff" }}>
                  Genres
                </a>
              </li>
            </ul>
            <div className="d-none d-lg-block">
              <div className="d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  aria-label="Search (Ctrl+K)"
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#33363C",
                    border: "none",
                    borderRadius: "8px",
                    height: "40px",
                    width: "280px",
                  }}
                >
                  <span className="DocSearch-Button-Container search-input">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <span className="DocSearch-Button-Placeholder">
                      Search show, movie, genre, e.t.c.
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="connect-wallet d-flex align-items-center justify-content-center ms-3"
                  style={{
                    backgroundColor: "#F2AA4C",
                    border: "none",
                    borderRadius: "8px",
                    height: "40px",
                    width: "180px",
                  }}
                >
                  <span className="wallet">
                    <FontAwesomeIcon icon={faWallet} className="wallet-icon" />
                    <span>Connect Wallet</span>
                  </span>
                </button>

                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center ms-3"
                  style={{
                    backgroundColor: "#33363C",
                    border: "none",
                    borderRadius: "8px",
                    height: "40px",
                    width: "74px",
                  }}
                >
                  <span className="account">
                    <img
                      src={accountIcon}
                      alt="account"
                      className="wallet-icon"
                    />
                    <img src={menu} alt="menu" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
