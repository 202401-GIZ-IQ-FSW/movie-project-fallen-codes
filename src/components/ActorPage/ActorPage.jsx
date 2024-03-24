import React from "react"

const ActorPage = () => {
  return (
    <main style={{ backgroundColor: "rgb(238, 238, 238)" }}>
      <div className="mx-auto p-16 grid-cols-2 w-full flex justify-between border-solid border-2 border-red-800">
        <div className="w-80 md:w-80 border-solid border-2 border-red-800">
          <img
            src={actorpicture}
            alt={title}
            className=" mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl  px-4 py-2 font-bold mb-2 bg-slate-200 rounded-md w-56">
            {actorName}
          </h1>
          <p>
            <span className="font-bold">Birth Date:</span> {birthdate}
          </p>
          <p>
            <span className="font-bold">Gender:</span>
            {gender}
          </p>
          <p>
            <span className="font-bold">From:</span> {country}
          </p>

          <p className="py-3 my-2">{biography}</p>

          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Famous Movies</h2>
            <ul>
              <li>{movie}</li>
              <li>{movie}</li>
              <li>{movie}</li>
              <li>{movie}</li>
              <li>{movie}</li>
              <li>{movie}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ActorPage
