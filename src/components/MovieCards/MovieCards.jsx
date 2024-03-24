import React from "react"

const MovieCards = ({ title, releaseYear, genre, poster, ratings }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden my-4 w-56 sm:w-36 h-auto mx-2 border-solid border-gray-600 border-2">
      <div>
        <img src={poster} alt={title} className="w-80% h-auto" />
      </div>
    </div>
  )
}

export default MovieCards
