import React from "react";
import { AddToWishListButton, MovieCard } from "../../components";
import "./index.sass";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Home__title">Home</h1>
      <MovieCard />
      <AddToWishListButton />
      <AddToWishListButton compact />
      <AddToWishListButton alreadyAdded />
    </div>
  );
};

export default Home;
