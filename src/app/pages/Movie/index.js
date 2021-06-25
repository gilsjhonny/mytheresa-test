import React from "react";
import { connect } from "react-redux";
import {
  addToWihslist,
  removeFromWishlist,
} from "../../../redux/modules/wishlist";
import {
  AddToWishListButton,
  Footer,
  MovieThumbnail,
  PageContainer,
} from "../../components";
import "./index.sass";

class Movie extends React.Component {
  state = {
    movieDetails: undefined,
  };

  async componentDidMount() {
    const movieId = this.props.match.params.id;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=57c98f3bc2b2cd4213729ff48dc9c3e2&language=en-US`
      );
      const movie = await response.json();

      this.setState({
        movieDetails: {
          id: movie.id,
          backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          overview: movie.overview,
          poster_src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          genres: movie.genres,
          release_date: movie.release_date,
          title: movie.title,
          vote_average: movie.vote_average,
        },
      });
    } catch (error) {}
  }

  handleAddToWishlist = () => {
    const { addToWishlist, isAddedToWishlist, removeFromWishlist } =
      this.props;

    if (isAddedToWishlist) {
      removeFromWishlist(this.state.movieDetails.id);
    } else {
      addToWishlist(this.state.movieDetails);
    }
  };

  render() {
    const { isAddedToWishlist } = this.props;
    const { movieDetails } = this.state;

    if (!movieDetails) return null;

    return (
      <div className="Movie">
        <div
          className="Movie__backdrop"
          style={{
            backgroundImage: `url('${movieDetails.backdrop_path}')`,
          }}
        />
        <PageContainer>
          <div className="Movie__details">
            <div className="Movie__details__left">
              <MovieThumbnail
                imgSrc={movieDetails.poster_src}
                height={500}
                width={320}
              />
              <AddToWishListButton
                alreadyAdded={isAddedToWishlist}
                onClick={this.handleAddToWishlist}
              />
            </div>
            <div className="Movie__details__right">
              <h1>
                {movieDetails.title}{" "}
                <span>
                  ({movieDetails.release_date.substr(0, 4)})
                </span>
              </h1>
              <div className="Movie__details__right__genres">
                {movieDetails.genres
                  .map((genre) => genre.name)
                  .join(", ")}
              </div>
              <h2>Overview </h2>
              {movieDetails && <p>{movieDetails.overview}</p>}
            </div>
          </div>
        </PageContainer>
        <Footer />
      </div>
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