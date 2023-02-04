import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://ds-service39.ru/wp-content/uploads/d/f/2/df24d590a6776fbc76d3783fc263298d.jpeg";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="300"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};


export default Movie;

