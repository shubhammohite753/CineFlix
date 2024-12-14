import React from "react";
import "./CarouselSlide.css"
import Slide1 from "../../assest/Slide1.png";
import Slide2 from "../../assest/Slide2.png";
import Slide3 from "../../assest/Slide3.png";
import Slide4 from "../../assest/Slide4.png";
import Slide5 from "../../assest/Slide5.png";
const CarouselSlide = () => {
  return (
    <div>
      <div className="main mt-4">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Slide1}
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Slide2}
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Slide3}
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Slide4}
                className="d-block w-100"
                alt="Slide 4"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Slide5}
                className="d-block w-100"
                alt="Slide 5"
              />
            </div>
          </div>

          
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
