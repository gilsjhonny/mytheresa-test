import React from "react";
import PropTypes from "prop-types";
import MovieThumbnail from "../MovieThumbnail";
import "./index.sass";

const MovieCard = (props) => {
  const {
    height = 310,
    posterSrc = "",
    releaseDate = "Unknown",
    title = "No Title",
    width = 200,
  } = props;

  return (
    <div className="MovieCard" style={{ width: `${width}px` }}>
      <MovieThumbnail
        posterSrc={posterSrc}
        height={height}
        width={width}
      />
      <div className="movie-info">
        <span className="title">{title}</span>
        <span className="release-date">{releaseDate}</span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  height: PropTypes.number,
  posterSrc: PropTypes.string,
  releaseDate: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
};

export default MovieCard;
