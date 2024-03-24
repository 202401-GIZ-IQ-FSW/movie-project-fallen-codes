import React from "react"

const MovieCards = ({ title, releaseYear, genre, poster }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden my-4 w-56 sm:w-36 h-auto mx-2 border-solid border-gray-600 border-2">
      <div>
        <img src={poster} alt={title} className="w-80% h-auto" />
      </div>
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-l mb-2 font-mono">
            {title}
          </div>
          <p className="text-gray-700 text-base">{releaseYear}</p>
          <p className="text-gray-700 text-base">{genre}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCards
