import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, MovieCard, PageContainer } from "../../components";
import "./index.sass";

const Wishlist = (props) => {
  const { movies } = props;
  const movieValues = Object.values(movies);

  const imgBackdrop =
    !!movieValues.length && movieValues[0].backdrop_path;

  return (
    <div className="Wishlist">
      <header>
        <div
          className="Wishlist__backdrop"
          style={{
            backgroundImage: `url('${imgBackdrop}')`,
          }}
        />
        <PageContainer className="Wishlist_title__container">
          <h1>My Wishlist</h1>
        </PageContainer>
      </header>
      <PageContainer>
        <Divider />
        <div className="Wishlist__container">
          {movieValues.length &&
            movieValues.map((movie) => (
              <Link
                className="MovieCardLink"
                to={`/movie/${movie.id}`}
              >
                <MovieCard
                  image_src={movie.poster_src}
                  title={movie.title}
                  release_date={movie.release_date}
                  width={220}
                  height={300}
                />
              </Link>
            ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default connect((state) => ({
  movies: state.wishlist.movies,
}))(Wishlist);
