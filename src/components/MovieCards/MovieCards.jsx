import React from "react"

const MovieCards = ({ title, releaseYear, genre, poster }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden my-4 w-100% max-w-300 ">
      <img src={poster} alt={title} className="w-100% md:w-50%" />
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-l mb-2">{title}</div>
          <p className="text-gray-700 text-base">Release Year: {releaseYear}</p>
          <p className="text-gray-700 text-base">Genre: {genre}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCards
