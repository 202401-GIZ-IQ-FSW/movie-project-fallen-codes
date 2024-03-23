import React from "react"

const ActorPage = () => {
  return (
    <div className="flex-row gap-50 ">
      <div className="w-350px mx-auto my-0">
        <img alt={title} src="URL" className="rounded-md w-full" />
      </div>
      <div className="w-50%">
        <h2> {actorname}</h2>
        <h4> {gender}</h4>
        <h5> {birthday}</h5>
        <p className="w-50% text-gray-800">{biography}</p>
      </div>
    </div>
  )
}

export default ActorPage
