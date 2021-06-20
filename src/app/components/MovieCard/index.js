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
        <div className="MovieCard__info__title">{title}</div>
        <div className="MovieCard__info__date">{date}</div>
      </div>
    </div>
  );
};

export default MovieCard;
