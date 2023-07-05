import React from "react";

function MovieCard({ movie }) {
  //   const { movie } = props;
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div>
        <h3 className="caard--title">{movie.title}</h3>
        <p>
          <small>REALSE DATA: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
