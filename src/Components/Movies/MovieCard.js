import React from "react";

const MovieCard = ({ src, title }) => {
  return (
    <div className="col-md-4">
      <img src={src} className="d-block w-100 cursor" alt={title} />
      <div className="d-md-block mt-2">
        <h5 className="movie-text">{title}</h5>
      </div>
    </div>
  );
};

export default MovieCard;
