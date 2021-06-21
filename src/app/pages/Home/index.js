import React from "react";
import {
  AddToWishListButton,
  Carousel,
  MovieCard,
} from "../../components";
import "./index.sass";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Home__title">Home</h1>
      <MovieCard />
      <AddToWishListButton />
      <AddToWishListButton compact />
      <AddToWishListButton alreadyAdded />
      <Carousel steps={220}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Carousel>
    </div>
  );
};

export default Home;
