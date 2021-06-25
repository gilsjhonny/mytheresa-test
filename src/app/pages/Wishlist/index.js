import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Divider,
  Footer,
  MovieCard,
  PageContainer,
} from "../../components";
import { ReactComponent as WishlistIcon } from "../../assets/wishlist.svg";
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
          <h1>
            <WishlistIcon /> My Wishlist
          </h1>
        </PageContainer>
      </header>
      <PageContainer className="Wishlist__container">
        <Divider />
        {!!movieValues.length && (
          <div className="Wishlist__items__grid">
            {movieValues.map((movie) => (
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
        )}
        <div className="Wishlist__items__grid--empty">
          No movies added to your Wishlist
        </div>
      </PageContainer>
      <Footer />
    </div>
  );
};

export default connect((state) => ({
  movies: state.wishlist.movies,
}))(Wishlist);
