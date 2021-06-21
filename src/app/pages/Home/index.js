import React from "react";
import { MovieCard } from "../../components";
import "./index.sass";

const Home = () => {
  return (
    <div>
      <h1 className="Home__title">Home</h1>
      <MovieCard />
    </div>
  );
};

export default Home;
