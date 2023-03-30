import React from "react";
import MovieSide from "../MovieSide/MovieSide";
import SideCart from "../SideCart/SideCart";

const Home = () => {
  return (
    <div className="w-11/12 mt-4 mx-auto lg:flex gap-4">
      <div className="movie-section">
        <MovieSide></MovieSide>
      </div>
      <div className="side-cart">
        <SideCart></SideCart>
      </div>
    </div>
  );
};

export default Home;
