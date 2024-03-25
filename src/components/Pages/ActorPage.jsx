import Link from "next/link"
import React from "react"

const ActorPage = ({ actor }) => {
  if (!actor) {
    return <p className="flex flex-row justify-center">Loading...</p> // Placeholder for when movie data is loading
  }
  const gender =
    actor.gender !== null
      ? actor.gender === 0
        ? "Not set / not specified"
        : actor.gender === 3
        ? "Non-binary"
        : actor.gender === 1
        ? "Female"
        : "Male"
      : "N/A"
  return (
    <>
      {actor && (
        <main style={{ backgroundColor: "rgb(12, 45, 87)" }}>
          <div className="mx-auto p-16 grid-cols-2 w-full flex justify-between sd:flex-wrap">
            <div className="mr-4 md:min-w-80 lg:min-w-96 rounded-lg ">
              <img
                src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                alt={actor.name}
                className="w-auto h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg: max-w-8/12 md:w-2/3 ">
              <h1
                style={{ color: "rgb(118, 171, 174)" }}
                className="text-3xl px-4 py-2 font-bold mb-2 bg-slate-200 rounded-md w-96 text-center"
              >
                {actor.name}
              </h1>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Birth Date:{" "}
                </span>{" "}
                <span style={{ color: "rgb(49, 54, 63)" }}>
                  {actor.birthday}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Gender:{" "}
                </span>
                <span style={{ color: "rgb(49, 54, 63)" }}>{gender}</span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  From:{" "}
                </span>{" "}
                <span style={{ color: "rgb(49, 54, 63)" }}>
                  {actor.place_of_birth}
                </span>
              </p>

              <p style={{ color: "rgb(49, 54, 63)" }} className="py-3 my-2">
                <span className="font-bold">Bio: </span> {actor.biography}
              </p>

              <div className="mt-4">
                <h2
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="text-xl font-bold mb-2"
                >
                  Famous Movies
                </h2>
                <ul>
                  <li style={{ color: "rgb(49, 54, 63)" }}>Movie 1</li>
                  <li style={{ color: "rgb(49, 54, 63)" }}>Movie 2</li>
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
