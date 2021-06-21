import React from "react";
import "./index.sass";

const MovieCard = (props) => {
  const { title = "No Title", date = "Unknown" } = props;

  return (
    <div className="MovieCard">
      <div className="MovieCard__thumbnail-container">
        <img
          alt="movie-poster"
          src="https://www.themoviedb.org/t/p/w500/nyDU092PeGGcd6wUIzlhFoaWcyX.jpg"
        />
      </div>
      <div className="MovieCard__info">
        <span className="MovieCard__info__title">{title}</span>
        <span className="MovieCard__info__date">{date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
