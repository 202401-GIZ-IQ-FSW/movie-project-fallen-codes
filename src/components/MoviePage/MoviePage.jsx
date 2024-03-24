import React from "react"

const MoviePage = () => {
  return (
    <div className="mx-auto p-16 grid-cols-2 w-full flex justify-between border-solid border-2 border-red-800">
      <div className="w-80 md:w-80 border-solid border-2 border-red-800">
        <img
          src={poster}
          alt={title}
          className=" mx-auto rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl  px-4 py-2 font-bold mb-2 bg-slate-200 rounded-md w-56">
          {title}
        </h1>
        <p>
          <span className="font-bold">Release Date:</span> {release}
        </p>
        <p>
          <span className="font-bold">Runtime:</span>
          {runtime}
        </p>
        <p>
          <span className="font-bold">Language:</span> {language}
        </p>
        <p>
          <span className="font-bold">Rating:</span>
          {rating}
        </p>
        <p>
          <span className="font-bold">Director:</span> {directorName}
        </p>
        <p className="py-3 my-2">{description}</p>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Main Actors</h2>
          <ul>
            <li>{actorName}</li>
            <li>{actorName}</li>
            <li>{actorName}</li>
            <li>{actorName}</li>
            <li>{actorName}</li>
            <li>{actorName}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
