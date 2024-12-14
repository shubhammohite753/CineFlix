import React, { useState } from "react";
import "./CategoryTab.css";
const CategoryTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "For You", link: "for-you/" },
    { title: "Reality", link: "reality/" },
    { title: "Bigg Boss", link: "bigg-boss/" },
    { title: "Top Free Movies", link: "top-free-movies/" },
    { title: "Premium", link: "premium/" },
    { title: "Top 10", link: "to-10/" },
    { title: "Studio", link: "studio/" },
    { title: "Live", link: "live/" },
  ];

  const handleTabClick = (index, link) => {
    setActiveTab(index);
    console.log(`Navigate to: ${link}`);
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div id="header-category" className="site__container wrapper mt-4">
        <div className="wrapper">
          <ul className="tab-box">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`tab ${activeTab === index ? "active" : ""}`}
                onClick={() => handleTabClick(index, tab.link)}
                title={tab.title}
              >
                {tab.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryTab;

export const Categories = () => {
  const [activeTab, setActiveTab] = useState("Series");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const categories = [
    "Series",
    "Action",
    "Anime",
    "Sci-Fi",
    "Kids",
    "Fiction",
    "Live",
    "Studios",
  ];

  return (
    <div className="main my-5">
      <ul className="nav nav-pills" style={{ justifyContent: "start" }}>
        {categories.map((category) => (
          <li key={category} className="nav-item">
            <a
              href="#"
              className={`nav-link ${activeTab === category ? "active" : ""}`}
              onClick={() => handleTabClick(category)}
              style={{
                backgroundColor:
                  activeTab === category ? "#f2aa4c" : "transparent",
                color: activeTab === category ? "black" : "white",
                borderRadius: "40px",
                padding: "10px 41px",
              }}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
