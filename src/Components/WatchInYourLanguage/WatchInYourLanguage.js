import React from "react";
import "./watch.css"

const WatchInYourLanguage = () => {
  const languages = [
    { title: "Hindi", symbol: "हिंदी" },
    { title: "Marathi", symbol: "मराठी" },
    { title: "Kannada", symbol: "ಕ" },
    { title: "Tamil", symbol: "அ" },
    { title: "English", symbol: "EN" },
  ];

  return (
    <div className="main my-5">
      <h5 className="text-white mb-4 fw-bold">Watch In Your Language</h5>
      <div
        className="d-flex flex-wrap justify-content-start"
        style={{ gap: "20px" }}
      >
        {languages.map((lang, index) => (
          <div
            key={index}
            className="bg-dark text-white text-center rounded"
            style={{
              width: "100px",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <div className="fw-bold fs-3 symbol">{lang.symbol}</div>
            <div className="fs-6 lang-title">{lang.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchInYourLanguage;

