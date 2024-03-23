import React from "react"

const MoviePage = () => {
  return (
    <div className="flex-row gap-50 ">
      <div className="w-350px mx-auto my-0">
        <img alt={title} src="URL" className="rounded-md w-full" />
      </div>
      <div className="w-50%">
        <h2> {title}</h2>
        <h4> {releaseYear}</h4>
        <p className="w-50% text-gray-800">{description}</p>
        <p> {genre} </p>
      </div>
    </div>
  )
}

export default MoviePage
