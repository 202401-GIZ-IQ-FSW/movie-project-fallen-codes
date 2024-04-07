"use client"
import React, { useState } from 'react'
import MovieCard from "../Cards/MovieCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";
import EmptyCard from '../Cards/EmptyCard';


const ActorPage = ({ actor, actorMovies }) => {

  const [pageId, setPageId] = useState(1)
  
  const biography = actor?.biography ? actor.biography?.slice(0,300) : "";

  const gender =
    actor?.gender !== null
      ? actor.gender === 0
        ? "Not set / not specified"
        : actor.gender === 3
        ? "Non-binary"
        : actor.gender === 1
        ? "Female"
        : "Male"
      : "N/A"
      
  const loader = <div className="mx-1 flex flex-row max-w-72 overflow-x-auto md:max-w-full"><EmptyCard /></div>

  return (
    <>
      {actor && (
        <main style={{ backgroundColor: "rgb(12, 45, 87)" }}>
          <div className="flex flex-col mx-auto p-16 max-w-sm md:max-w-full md:grid-cols-2 md:flex md:flex-row md:justify-between">
            <div className="md:mr-4 md:min-w-80 lg:min-w-96 rounded-lg ">
              {actor.profile_path ?
                ( <img
                      src={actor.profile_path?(`https://image.tmdb.org/t/p/w400/${actor.profile_path}`):("/logo-white.svg")}
                      alt={actor.name}
                      className="w-60 h-72 md:w-auto md:h-[100%] text-center mx-auto rounded-lg shadow-lg"
                  /> )
                :
                ( <img
                      src="/logo-white.svg"
                      alt={actor.name}
                      className="w-[70%] md:w-64 text-center mx-auto rounded-lg shadow-lg"
                  /> )
              }
            </div>
            <div
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
              className="text-xs md:text-base p-4 rounded-lg lg:max-w-8/12 m-2  md:w-2/3 shadow-2xl shadow-orange-700 "
            >
              <h1
                style={{ color: "rgb(252, 103, 54)" }}
                className="text-sm md:text-3xl px-4 py-2 font-bold mb-2 bg-slate-200 rounded-md w-58 sm:mr-4 shadow-md hover:bg-slate-400"
              >
                {actor.name}
              </h1>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Birth Date:{" "}
                </span>{" "}
                <span style={{ color: "rgb(49, 54, 63)" }}>
                  {actor.birthday}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Gender:{" "}
                </span>
                <span style={{ color: "rgb(49, 54, 63)" }}>{gender}</span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  From:{" "}
                </span>
                <span style={{ color: "rgb(49, 54, 63)" }}>
                  {actor.place_of_birth}
                </span>
              </p>
              <p style={{ color: "rgb(49, 54, 63)" }} className="flex flex-row  py-3 my-2">
                <span className="font-bold">Bio:</span>
                { actor?.biography?.length > 300 ? 
                    ( <button className="pl-1 flex flex-wrap items-start group hover:cursor-pointer">
                      <span className="text-left block group-focus:hidden">{biography}.....</span>
                      <span className="text-left hidden group-focus:block">{actor.biography}</span>
                      <span className="block group-focus:hidden text-[#fc6736] hover:text-[red]" >Read More</span>
                      <span className="hidden group-focus:block" ></span>
                    </button> )
                  : 
                    ( <span className="text-left">{actor.biography}</span> )
                  }
              </p>
            </div>
          </div>
          <div className="mx-2 flex flex-row justify-center items-center pb-10 rounded-lg">
            { !actorMovies?.length ? 
                ( loader )
              :
                ( <>
                    <div><FontAwesomeIcon onClick={() => setPageId(pageId-1)} icon={faChevronCircleLeft}  className="bg-white text-[#fc6736] text-3xl rounded-full hover:cursor-pointer"/></div>
                      <div className="mx-1 flex flex-row max-w-72 overflow-x-auto md:max-w-full mr-2 lg:mr-0">
                        {actorMovies?.slice((pageId - 1) * 5, pageId * 5).map((movie, movieIndex) => (
                          <MovieCard key={movieIndex} movie={movie} />))}
                      </div>
                    <div><FontAwesomeIcon onClick={() => setPageId(pageId+1)} icon={faChevronCircleRight} className="bg-white text-[#fc6736] text-3xl rounded-full hover:cursor-pointer"/></div>
                  </> )
              }
          </div>
        </main>
      )}
    </>
  )
}

export default ActorPage
