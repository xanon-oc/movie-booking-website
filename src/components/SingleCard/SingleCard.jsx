import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

const SingleCard = ({ movie }) => {
  return (
    <div>
      <div className="flex flex-col max-w-xs p-6 h-[610px] rounded-md border ">
        <img
          src={movie.poster}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase text-orange-500">
            <div className="flex  items-center">
              <img
                src="../../../public/imdb.png"
                alt="imdb"
                className="w-8 mr-2"
              />{" "}
              {movie.imdbRating}
              <FontAwesomeIcon icon={faStar} style={{ color: "#f9e50b" }} />
            </div>
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {movie.movieName}
          </h2>
        </div>
        <p className="dark:text-gray-100">{movie.description}</p>
        <p className="mt-4 block text-xs font-medium tracking-widest uppercase ">
          WT : {movie.watchTime}
        </p>
        <p className="block  text-xs font-medium tracking-widest uppercase ">
          Category : {movie.category}
        </p>

        <div className="mt-auto">
          <button className="btn gap-4 border-none shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 w-full">
            <FontAwesomeIcon icon={faCartShopping} /> Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
