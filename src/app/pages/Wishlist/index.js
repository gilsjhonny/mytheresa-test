import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  BackdropImage,
  Container,
  Divider,
  MovieCard,
} from "../../components";
import { WishlistIcon } from "../../components/Icons";
import "./index.sass";

const MOVIE_THUMBNAIL_HEIGHT = 300;
const MOVIE_THUMBNAIL_WIDTH = 220;

const Wishlist = (props) => {
  const { movies } = props;
  const movieValues = Object.values(movies);

  // Pick first movie of the array to show a backdrop image
  const imgBackdrop = !!movieValues.length
    ? movieValues[0].backdrop_path
    : undefined;

  return (
    <div className="Wishlist">
      <header>
        <BackdropImage backdropSrc={imgBackdrop} height={400} />
        <div
          className="backdrop-img"
          style={{
            backgroundImage: `url('${imgBackdrop}')`,
          }}
        />
        <Container className="wishlist-title-container">
          <h1>
            <WishlistIcon /> My Wishlist
          </h1>
        </Container>
      </header>
      <Container className="movies-container">
        <Divider />
        {!!movieValues.length ? (
          <div className="grid">
            {movieValues.map((movie) => (
              <Link
                className="MovieCardLink"
                key={movie.id}
                to={`/movie/${movie.id}`}
              >
                <MovieCard
                  height={MOVIE_THUMBNAIL_HEIGHT}
                  posterSrc={movie.poster_src}
                  releaseDate={movie.release_date}
                  title={movie.title}
                  width={MOVIE_THUMBNAIL_WIDTH}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid--empty">
            No movies added to your Wishlist
          </div>
        )}
      </Container>
    </div>
  );
};

export default connect((state) => ({
  movies: state.wishlist.movies,
}))(Wishlist);
