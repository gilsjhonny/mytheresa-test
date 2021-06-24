import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../../redux/modules/home";
import {
  Carousel,
  Divider,
  MovieCard,
  PageContainer,
} from "../../components";
import "./index.sass";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    const { movies } = this.props;

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

    if (!movies) return null;

    return (
      <div className="Home">
        <PageContainer>
          {movies.nowPlaying && getCarousel(movies.nowPlaying)}
          <Divider />
          {movies.upcoming && getCarousel(movies.upcoming)}
          <Divider />
          {movies.topRated && getCarousel(movies.topRated)}
        </PageContainer>
      </div>
    );
  }
}

export default connect((state) => ({
  movies: state.home.movies,
}))(Home);
