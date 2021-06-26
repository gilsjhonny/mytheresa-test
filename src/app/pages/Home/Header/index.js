import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, MovieThumbnail } from "../../../components";
import "./index.sass";

const MOVIE_THUMBNAIL_HEIGHT = 280;
const MOVIE_THUMBNAIL_WIDTH = 200;

const HomeHeader = ({ featuredMovie }) => (
  <header className="HomeHeader">
    <div
      className="backdrop-img"
      style={{
        backgroundImage: `url('${featuredMovie.backdrop_path}')`,
      }}
    />
    <Container className="featured-movie-container">
      <Link to={`movie/${featuredMovie.id}`}>
        <div>
          <MovieThumbnail
            height={MOVIE_THUMBNAIL_HEIGHT}
            noHoverEffect
            posterSrc={featuredMovie.poster_src}
            width={MOVIE_THUMBNAIL_WIDTH}
          />
          <h1>Pick of The Week</h1>
        </div>
      </Link>
    </Container>
  </header>
);

HomeHeader.propTypes = {
  featuredMovie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    id: PropTypes.number,
    poster_src: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default HomeHeader;
