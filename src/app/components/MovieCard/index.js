import React from "react";
import PropTypes from "prop-types";
import "./index.sass";

const MovieCard = (props) => {
  const {
    title = "No Title",
    release_date = "Unknown",
    image_src = "",
  } = props;

  return (
    <div className="MovieCard">
      <div className="MovieCard__thumbnail-container">
        <img alt="movie-poster" src={image_src} />
      </div>
      <div className="MovieCard__info">
        <span className="MovieCard__info__title">{title}</span>
        <span className="MovieCard__info__date">{release_date}</span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  release_date: PropTypes.string,
  image_src: PropTypes.string,
};

export default MovieCard;
