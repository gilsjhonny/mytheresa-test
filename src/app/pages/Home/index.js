import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../../redux/modules/home";
import {
  Carousel,
  CategoryTitle,
  Footer,
  MovieCard,
  MovieThumbnail,
  PageContainer,
} from "../../components";
import "./index.sass";

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.movies) {
      this.props.dispatch(fetchMovies);
    }
  }

  render() {
    const { movies } = this.props;

    const getCarousel = (movies, category) => (
      <Carousel steps={220}>
        {movies.map((movie) => (
          <Link
            to={{
              pathname: `/movie/${movie.id}`,
              state: { category, test: true },
            }}
          >
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

    if (!movies) return null;

    const mostPopularMovieNowPLaying = movies.nowPlaying[0];

    return (
      <div className="Home">
        <header>
          <div
            className="Home__header__backdrop"
            style={{
              backgroundImage: `url('${mostPopularMovieNowPLaying.backdrop_path}')`,
            }}
          />
          <PageContainer className="Home_title__container">
            <Link
              className="Pick__link"
              to={`movie/${mostPopularMovieNowPLaying.id}`}
            >
              <div>
                <MovieThumbnail
                  imgSrc={mostPopularMovieNowPLaying.image_src}
                  width={200}
                  height={280}
                  noHoverEffect
                />
                <h1>Pick of The Week</h1>
              </div>
            </Link>
          </PageContainer>
        </header>
        <PageContainer>
          <CategoryTitle>Now Playing</CategoryTitle>
          {movies.nowPlaying &&
            getCarousel(movies.nowPlaying, "now-playing")}
          <CategoryTitle>Upcoming</CategoryTitle>
          {movies.upcoming &&
            getCarousel(movies.upcoming, "upcoming")}
          <CategoryTitle>Top Rated</CategoryTitle>
          {movies.topRated &&
            getCarousel(movies.topRated, "top-rated")}
        </PageContainer>
        <Footer />
      </div>
    );
  }
}

export default connect((state) => ({
  movies: state.home.movies,
}))(Home);
