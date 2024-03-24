import React from "react"

const ActorCards = ({ name, image }) => {
  return (
    <div className="mx-2 my-4 flex h-auto w-64 flex-col overflow-hidden rounded-lg border-2 border-solid border-gray-600 bg-white shadow-md sm:w-44">
      <div>
        <img srcs={imageURL} alt={name} className="w-80% h-auto" />
      </div>
      <div>
        <h2 className="text-bold text-center text-lg text-gray-600">{name}</h2>
      </div>
    </div>
  )
}

export default ActorCards
