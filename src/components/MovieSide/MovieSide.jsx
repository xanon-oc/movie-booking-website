import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const MovieSide = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:gap-4 gap-4 md:grid-cols-2">
      {movies.map((movie) => (
        <SingleCard key={movie.id} movie={movie}></SingleCard>
      ))}
    </div>
  );
};

export default MovieSide;
