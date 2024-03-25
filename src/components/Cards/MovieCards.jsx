import Link from "next/link"
import React from "react"

const MovieCards = ({ movie }) => {
  return (
    <Link
      href={`/movie/${movie.id}?${movie.title.toLowerCase().replace(" ", "_")}`}
    >
      <div
        style={{ borderColor: "rgb(239, 236, 236)" }}
        className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden my-4 w-64 sm:w-52 h-auto mx-2 border-solid  "
      >
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="w-80% h-auto"
          />
        </div>
      </div>
    </Link>
  )
}

export default MovieCards
