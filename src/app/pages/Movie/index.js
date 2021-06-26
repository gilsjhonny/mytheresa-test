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
  Container,
} from "../../components";
import "./index.sass";

const MOVIE_THUMBNAIL_HEIGHT = 500;
const MOVIE_THUMBNAIL_WIDTH = 320;

class Movie extends React.Component {
  state = {
    movieDetails: undefined,
  };

  async componentDidMount() {
    const { match } = this.props;
    const movieId = match && match.params.id;

    if (movieId) {
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
      } catch (error) {
        console.log(error);
      }
    }
  }

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
    const genres = movieDetails.genres
      .map((genre) => genre.name)
      .join(", ");

    return (
      <div className="Movie">
        <div
          className="backdrop-img"
          style={{
            backgroundImage: `url('${movieDetails.backdrop_path}')`,
          }}
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
              <AddToWishListButton
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
