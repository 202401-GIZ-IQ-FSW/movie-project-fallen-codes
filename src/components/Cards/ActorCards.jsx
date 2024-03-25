import Link from "next/link"
import React from "react"

const ActorCards = ({ actor }) => {
  return (
    <Link href={`/actors/${actor.id}?${actor.name.toLowerCase().replace(" ", "_")}`}>
      <div className="mx-2 my-4 flex h-auto w-64 flex-col overflow-hidden rounded-lg border-2 border-solid border-gray-600 bg-white shadow-md sm:w-44">
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name} className="w-80% h-auto" />
        </div>
        <div>
          <h2 className="text-bold text-center text-lg text-gray-600">{actor.name}</h2>
        </div>
      </div>
    </Link>
  )
}

export default ActorCards
