import React from "react"

const ActorCards = ({ name, image }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden my-4 w-64 sm:w-44 h-auto mx-2 border-solid border-gray-600 border-2 ">
      <div>
        <img srcs={imageURL} alt={actor - pic} className="w-80% h-auto" />
      </div>
      <div>
        <h2 className=" text-bold text-center text-gray-600 text-lg  ">
          {name}
        </h2>
      </div>
    </div>
  )
}

export default ActorCards
