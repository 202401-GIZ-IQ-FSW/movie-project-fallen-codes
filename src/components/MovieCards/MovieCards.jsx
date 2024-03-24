import React from "react"

const MovieCards = ({ title, releaseYear, genre, poster }) => {
  return (
    <div
      style={{ borderColor: "rgb(118, 171, 174)" }}
      className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden my-4 w-64 sm:w-52 h-auto mx-2 border-solid border-2"
    >
      <div>
        <img src={poster} alt={title} className="w-80% h-auto" />
      </div>
    </div>
  )
}

export default MovieCards
