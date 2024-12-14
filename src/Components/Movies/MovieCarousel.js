import React from "react";
import MovieCard from "./MovieCard";
import "./Movies.css";

const MovieCarousel = ({ headerTitle, movies }) => {
  return (
    <div className="main mt-5">
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="movie-header">{headerTitle}</h5>
        <span className="view-text">View All</span>
      </div>

      <div
        id={`carouselExample-${headerTitle.replace(/\s+/g, "-")}`}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {movies.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row">
                {group.map((movie) => (
                  <MovieCard key={movie.title} src={movie.src} title={movie.title} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselExample-${headerTitle.replace(/\s+/g, "-")}`}
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
          data-bs-target={`#carouselExample-${headerTitle.replace(/\s+/g, "-")}`}
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
  );
};

export default MovieCarousel;
