import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../../redux/modules/home";
import {
  Carousel,
  CategoryTitle,
  MovieCard,
  Container,
} from "../../components";
import Header from "./Header";

const CAROUSEL_STEPS = 220;

class Home extends React.Component {
  static async preInitStore(store) {
    return store.dispatch(fetchMovies);
  }

  componentDidMount() {
    const { dispatch, movies } = this.props;
    if (!movies) dispatch(fetchMovies);
  }

  render() {
    const { error, movies } = this.props;

    const renderMoviesCarousel = (movies) => (
      <Carousel steps={CAROUSEL_STEPS}>
        {movies.map(({ id, title, release_date, poster_src }) => (
          <Link key={id} to={`/movie/${id}`}>
            <MovieCard
              id={id}
              key={id}
              title={title}
              releaseDate={release_date}
              posterSrc={poster_src}
            />
          </Link>
        ))}
      </Carousel>
    );

    // Candidate to become a component of its own, let's keep it
    // here in the meantime
    const renderCategorySection = (title, category) => (
      <>
        <CategoryTitle>{title}</CategoryTitle>
        {movies[category] &&
          renderMoviesCarousel(movies[category], category)}
      </>
    );

    // To display Pick of the week
    const mostPopularMovieNowPLaying = movies && movies.nowPlaying[0];

    return (
      <div className="Home">
        {mostPopularMovieNowPLaying && (
          <Header featuredMovie={mostPopularMovieNowPLaying} />
        )}
        <Container>
          {movies && (
            <>
              {renderCategorySection("Now Playing", "nowPlaying")}
              {renderCategorySection("Upcoming", "upcoming")}
              {renderCategorySection("Top Rated", "topRated")}
            </>
          )}
          {error && <div>Error: loading movies</div>}
        </Container>
      </div>
    );
  }
}

export default connect((state) => ({
  error: state.home.error,
  loaded: state.home.loaded,
  loading: state.home.loading,
  movies: state.home.movies,
}))(Home);
