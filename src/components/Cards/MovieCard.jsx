import Link from "next/link"
import React from "react"

const MovieCard = ({ movie }) => {
  return (
    <Link
      href={`/movie/${movie.id}?${movie.title.toLowerCase().replace(/ /g, "_")}`}
    >
      <div
        style={{ borderColor: "rgb(252, 103, 54)" }}
        className="flex flex-col bg-white shadow-md rounded-lg my-2 w-40 md:w-52 mx-2 border-2 border-solid"
      >
        <div>
          <img
            style={{
              backgroundImage: `url("/logo-white.svg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-[100%] h-60 md:h-72 text-center"
          />
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
