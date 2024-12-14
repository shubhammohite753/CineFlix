import React from "react";
import collage from "../../assest/collage.png";
import "./Welcome.css";
import star from "../../assest/star.png";
const Welcome = () => {
  return (
    <div className="main">
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: "450px",
            backgroundImage: `url(${collage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="welcome-box">
          <img src={star} style={{ width: "90px", height: "20px" }} />
          <h5>Welcome to Cineflicks</h5>
          <div>Your new home for movies and series,</div>
          <span>Turn streaming into a rewarding experience!</span>
          <h5>Watch | Earn | Repeat</h5>
        </div>

        <div className="wallet-main">
          <button className="wallet-box">Connect your wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
