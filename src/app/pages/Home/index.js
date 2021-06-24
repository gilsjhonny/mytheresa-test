import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMoviesByGenre } from "../../../redux/actions";
import { Carousel, MovieCard } from "../../components";
import "./index.sass";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMoviesByGenre([16, 10749, 878])); // Map ids with Genres
  }

  render() {
    const { topMoviesByGenres } = this.props;

    const getCarousel = (movies) => (
      <Carousel steps={220}>
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              image_src={movie.image_src}
            />
          </Link>
        ))}
      </Carousel>
    );

    if (!topMoviesByGenres) return null;

    return (
      <div className="Home">
        {topMoviesByGenres["animation"] &&
          getCarousel(topMoviesByGenres["animation"])}
        {topMoviesByGenres["documentaries"] &&
          getCarousel(topMoviesByGenres["documentaries"])}
        {topMoviesByGenres["fiction"] &&
          getCarousel(topMoviesByGenres["fiction"])}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    topMoviesByGenres: state.topMoviesByGenres,
  };
})(Home);
