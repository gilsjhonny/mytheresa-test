import React from "react";
import classNames from "classnames";
import fetch from "cross-fetch";
import { connect } from "react-redux";
import universal from "react-universal-component";

import {
  addToWihslist,
  removeFromWishlist,
} from "../../../redux/modules/wishlist";
import {
  BackdropImage,
  Container,
  MovieThumbnail,
} from "../../components";
import { genresToString, getMainGenre } from "../../helpers/movie";
import { api } from "../../constants";
import { themeConfig } from "./theme-config";
import "./index.sass";

const MOVIE_THUMBNAIL_HEIGHT = 500;
const MOVIE_THUMBNAIL_WIDTH = 320;

// ------------------------------------------
// Universal Imports
// Import dynamically Wishlist Button and theme wrapper
const UniversalButton = universal(
  (props) =>
    import(
      `../../components/${props.buttonType || "AddToWishlistButton"}`
    ),
  { ignoreBabelRename: true }
);

const UniversalTheme = universal(
  (props) => import(`./theme-wrappers/${props.theme || "Default"}`),
  { ignoreBabelRename: true }
);
// -----------------------------------------
// End Of Universal Imports

class Movie extends React.Component {
  state = {
    movieDetails: undefined,
  };

  async componentDidMount() {
    const { match } = this.props;
    const movieId = match && match.params.id;

    if (movieId) {
      const movieDetails = await this.fetchMovie(movieId);
      this.setState({ movieDetails });
    }
  }

  // Didn't want to do it with redux, I don't think it's necessary to
  // store this globally, if we happen to use this in other places we could turn this
  // into a HOC `WithMovie`
  fetchMovie = async (movieId) => {
    let movieDetails;

    try {
      const response = await fetch(
        `${api.baseUrl}3/movie/${movieId}?api_key=57c98f3bc2b2cd4213729ff48dc9c3e2&language=en-US`
      );
      const movie = await response.json();

      movieDetails = {
        id: movie.id,
        backdrop_path: `${api.imageBaseUrl}original${movie.backdrop_path}`,
        overview: movie.overview,
        poster_src: `${api.imageBaseUrl}w500${movie.poster_path}`,
        genres: movie.genres,
        release_date: movie.release_date,
        title: movie.title,
        vote_average: movie.vote_average,
      };
    } catch (error) {
      console.log(error);
    }

    return movieDetails;
  };

  handleAddOrRemoveFromWishlist = () => {
    const { addToWishlist, isAddedToWishlist, removeFromWishlist } =
      this.props;
    const { movieDetails } = this.state;

    if (isAddedToWishlist) {
      removeFromWishlist(movieDetails.id);
    } else {
      addToWishlist(movieDetails);
    }
  };

  render() {
    const { isAddedToWishlist } = this.props;
    const { movieDetails } = this.state;

    if (!movieDetails) return null;

    const yearOfRelease = movieDetails.release_date.substr(0, 4);

    // Genres and Main Genre
    const genres = genresToString(movieDetails.genres);
    const mainGenre = getMainGenre(movieDetails.genres);

    // Get Wishlist Button Type and Theme Wrapper
    const wishlistButton =
      themeConfig[mainGenre] && themeConfig[mainGenre].wishlistButton;
    const themeWrapper =
      themeConfig[mainGenre] && themeConfig[mainGenre].theme;

    return (
      <UniversalTheme theme={themeWrapper}>
        <div className="Movie">
          <BackdropImage
            backdropSrc={movieDetails.backdrop_path}
            height={490}
          />
          <Container>
            <div className="details">
              <div className="details--left">
                <MovieThumbnail
                  className="thumbnail"
                  height={MOVIE_THUMBNAIL_HEIGHT}
                  posterSrc={movieDetails.poster_src}
                  width={MOVIE_THUMBNAIL_WIDTH}
                />
                <UniversalButton
                  buttonType={wishlistButton}
                  alreadyAdded={isAddedToWishlist}
                  onClick={this.handleAddOrRemoveFromWishlist}
                />
              </div>
              <div className="details--right">
                <h1>
                  {movieDetails.title} <span>({yearOfRelease})</span>
                </h1>
                <div className="genres">{genres}</div>
                <h2>Overview</h2>
                {movieDetails && <p>{movieDetails.overview}</p>}
              </div>
            </div>
          </Container>
        </div>
      </UniversalTheme>
    );
  }
}

export default connect(
  (state, ownProps) => {
    return {
      isAddedToWishlist:
        ownProps.match &&
        !!state.wishlist.movies[ownProps.match.params.id],
    };
  },
  (dispatch) => ({
    addToWishlist: (movieDetails) =>
      dispatch(addToWihslist(movieDetails)),
    removeFromWishlist: (movieId) =>
      dispatch(removeFromWishlist(movieId)),
  })
)(Movie);
