import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../../redux/actions";
import {
  AddToWishListButton,
  Carousel,
  MovieCard,
} from "../../components";
import "./index.sass";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies("horror"));
  }

  render() {
    console.log(this.props);
    return (
      <div className="Home">
        {!!this.props.movies && !!this.props.movies.length && (
          <Carousel steps={220}>
            {this.props.movies.map((movie) => (
              <MovieCard
                title={movie.title}
                release_date={movie.release_date}
                image_src={movie.image_src}
              />
            ))}
          </Carousel>
        )}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    movies: state.movies,
  };
})(Home);
