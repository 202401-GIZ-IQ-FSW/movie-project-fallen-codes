
import Link from "next/link"
import React from "react"

const MoviePage = ({movie}) => {
  if (!movie) {
    return <p>Loading...</p>; // Placeholder for when movie data is loading
  }
  // const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'
  const ratings = movie.vote_average ? Math.floor(movie.vote_average * 10) / 10 : 'N/A';

  return (
    <>
      {movie && (
      <main style={{ backgroundColor: "rgb(238, 238, 238)" }}>
        <div className="mx-auto p-16 grid-cols-2 w-full flex justify-between border-solid border-2 border-red-800">
          <div className="mr-4 w-80 lg:w-fit border-solid border-2 border-red-800 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="w-auto h-auto mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl  px-4 py-2 font-bold mb-2 bg-slate-200 rounded-md w-56">
              {movie.title}
            </h1>
            <p>
              <span className="font-bold">Release Date: </span> 
              {movie.release_date}
            </p>
            <p>
              <span className="font-bold">Runtime: </span>
              {movie.runtime}
            </p>
            <p>
              <span className="font-bold">Language: </span> {movie.original_language}
            </p>
            <p>
              <span className="font-bold">Rating: </span>
              {ratings}
            </p>
            <p>
              <span className="font-bold">Votes: </span>
              {movie.vote_count}
            </p>
            <p>
              <span className="font-bold">Director: </span> 
              {/* {directorName} */}
            </p>
            <p className="py-3 my-2">
              <span className="font-bold">Description: </span>
              {movie.overview}
            </p>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Main Actors</h2>
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
