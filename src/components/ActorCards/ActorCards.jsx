import React from "react"

const ActorCards = ({ name, image }) => {
  return (
    <div className="actor-card bg-yellow-50 flex flex-col lg:flex-row lg:flex-wrap shadow-md rounded-lg overflow-hidden my-4 w-100% max-w-150 ">
      <img srcs={imageURL} alt={actor - pic} className="w-full" />
      <div>
        <h2 className=" text-bold text-gray-600 text-lg ">{name}</h2>
      </div>
    </div>
  )
}

export default ActorCards
