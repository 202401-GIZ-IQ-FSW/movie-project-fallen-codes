import Link from "next/link"
import React from "react"

const MoviePage = ({ movie }) => {
  if (!movie) {
    return <p>Loading...</p> // Placeholder for when movie data is loading
  }
  // const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'
  const ratings = movie.vote_average
    ? Math.floor(movie.vote_average * 10) / 10
    : "N/A"

  return (
    <>
      {movie && (
        <main
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{ backdropFilter: "blur(3px)" }}
            className="mx-auto p-16 grid-cols-2 w-full  md:flex justify-between "
          >
            <div className="mr-4 md:w-80 lg:w-96 rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="w-auto h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
              className="p-4 rounded-lg lg: max-w-8/12 md:w-2/3"
            >
              <h1
                style={{ color: "rgb(34, 40, 49)" }}
                className="text-3xl  px-4 py-2 font-bold mb-2 bg-slate-200 rounded-md w-64 shadow-md hover:bg-slate-400"
              >
                {movie.title}
              </h1>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Release Date:{" "}
                </span>
                <span style={{ color: "rgb(252, 103, 54)" }}>
                  {movie.release_date}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Runtime:{" "}
                </span>
                <span style={{ color: "rgb(252, 103, 54)" }}>
                  {movie.runtime}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Language:{" "}
                </span>{" "}
                <span style={{ color: "rgb(252, 103, 54)" }}>
                  {movie.original_language}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(252, 103, 54)" }}
                  className="font-bold"
                >
                  Rating:{" "}
                </span>
                <span style={{ color: "rgb(252, 103, 54)" }}>{ratings}</span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Votes:{" "}
                </span>
                <span style={{ color: "rgb(252, 103, 54)" }}>
                  {movie.vote_count}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Director:{" "}
                </span>
                {/* {directorName} */}
              </p>
              <p style={{ color: "rgb(49, 54, 63)" }} className="py-3 my-2">
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Description:{" "}
                </span>
                {movie.overview}
              </p>
              <div className="mt-4">
                <h2
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="text-xl font-bold mb-2"
                >
                  Main Actors
                </h2>
                <ul>
                  <li>Actor 1</li>
                  <li>Actor 2</li>
                  {/* {actors.map( actor => {
                  return(
                    <li key={actor.name}>
                      <Link  href={``} > {actor.name} </Link>
                    </li>
                  )
                })} */}
                </ul>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default MoviePage
