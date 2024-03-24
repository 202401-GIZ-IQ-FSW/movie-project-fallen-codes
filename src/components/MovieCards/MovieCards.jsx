import React from "react"

const MovieCards = ({ title, releaseYear, genre, poster }) => {
  return (
<<<<<<< HEAD
   

    <div className="flex flex-col lg:flex-row lg:flex-wrap bg-gray-400
     shadow-md rounded-lg overflow-hidden my-4 w-100% max-w-300 ">
=======
    <div className="flex flex-col lg:flex-row lg:flex-wrap bg-white shadow-md rounded-lg overflow-hidden my-4 w-100% max-w-150 ">
>>>>>>> 327d05c0bb050c1a38df3f6f921032b34144242a
      <img src={poster} alt={title} className="w-100% md:w-50%" />
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-l mb-2 font-mono">{title}</div>
          <p className="text-gray-700 text-base">Release Year: {releaseYear}</p>
          <p className="text-gray-700 text-base">Genre: {genre}</p>
        </div>
      </div>
    </div>
   
  )
}

export default MovieCards
