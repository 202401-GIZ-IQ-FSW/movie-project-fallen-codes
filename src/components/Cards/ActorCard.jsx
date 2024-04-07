import Link from "next/link"
import React from "react"

const ActorCard = ({ actor }) => {
  return (
    <Link
      href={`/actors/${actor.id}?${actor.name.toLowerCase().replace(/ /g, "_")}`}
    >
      <div
        style={{ 
          borderColor: "rgb(118, 171, 174)"
        }}
        className="mx-2 my-4 w-40 md:w-52 flex flex-col justify-between overflow-hidden rounded-lg border-2 border-solid bg-white shadow-md"
      >
        <div>
          <img
            style={{ 
              backgroundImage: `url("/logo-white.svg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            className="w-[100%] h-52 md:h-72 text-center"
          />
        </div>
        <div>
          <h2 className="text-bold text-center text-lg text-gray-600">
            {actor.name}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default ActorCard
