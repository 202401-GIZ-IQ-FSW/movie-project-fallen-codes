
import Link from "next/link"
import React from "react"

const ActorPage = ({actor}) => {
  if (!actor) {
    return <p className="flex flex-row justify-center">Loading...</p>; // Placeholder for when movie data is loading
  }
  const gender = actor.gender !== null ? ( actor.gender === 0 ? "Not set / not specified" : ( actor.gender === 3 ? "Non-binary" : ( actor.gender === 1 ? "Female" : "Male" ))) : 'N/A';
  return (
    <>
    {actor && (
    <main style={{ backgroundColor: "rgb(238, 238, 238)" }}>
      <div className="mx-auto p-16 grid-cols-2 w-full flex border-solid border-2 border-red-800">
        <div className="mr-4 w-80 lg:w-fit border-solid border-2 border-red-800 rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
            alt={actor.name}
            className=" mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl px-4 py-2 font-bold mb-2 bg-slate-200 rounded-md w-56">
            {actor.name}
          </h1>
          <p>
            <span className="font-bold">Birth Date: </span> {actor.birthday}
          </p>
          <p>
            <span className="font-bold">Gender: </span>
            {gender}
          </p>
          <p>
            <span className="font-bold">From: </span> {actor.place_of_birth}
          </p>

          <p className="py-3 my-2">
            <span className="font-bold">Bio: </span> {actor.biography}
          </p>

          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Famous Movies</h2>
            <ul>
              <li>Movie 1</li>
              <li>Movie 2</li>
              {/* {movies.map( movie => {
                  return(
                    <li key={movie.title}>
                      <Link  href={``} > {movie.title} </Link>
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

export default ActorPage
