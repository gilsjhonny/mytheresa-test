import React from "react";
import { AddToWishListButton, MovieCard } from "../../components";
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

  render() {
    const { movieDetails } = this.state;

    return (
      <div>
        {!!movieDetails && (
          <MovieCard
            title={movieDetails.title}
            release_date={movieDetails.release_date}
            image_src={movieDetails.poster_src}
          />
        )}
        <AddToWishListButton />
        {movieDetails && <p>{movieDetails.overview}</p>}
      </div>
    );
  }
}

export default Movie;
