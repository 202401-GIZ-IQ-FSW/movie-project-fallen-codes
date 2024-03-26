"use client"
import React, { useState, useEffect } from "react"
import { actorsData, actorsDataAll } from "@/data/actorsData"
import Navbar from "@/components/Navbar/Navbar"
import ActorCards from "@/components/Cards/ActorCards"
import NavButtons from "@/components/Buttons/NavButtons"

export default function Actors() {
  const [actors, setActors] = useState([])
  // const [actorsAll, setActorsAll] = useState([])
  // const [totalPages, setTotalPages] = useState(1)
  const [pageId, setPageId] = useState(1)
  const [searchText, setSearchText] = useState("");

// fetch actors page per page
  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actorsList = await actorsData()
        const results = actorsList.results
        setActors(results)
        // const resultsTotalPages = actorsList.total_pages
        // setTotalPages(resultsTotalPages)
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }
    fetchActors()
    console.log("fetching-actors")
  }, [])
  
  // Calculate the index range for the movies to display
  const startIndex = (pageId - 1) * 20
  const endIndex = startIndex + 20

  const actorsToDisplay = actors.filter((actor) => {
    // actor.name.toLowerCase().includes(searchText.toLowerCase())
    if (!searchText) return true;
    const nameMatch = actor.name.toLowerCase().includes(searchText.toLowerCase());
    return nameMatch; 
  });

  function handleNextPage() {
    if (pageId <= Math.floor(actorsToDisplay.length/20)) {
      setPageId((pageId) => (pageId += 1))
      console.log("Next Btn Change actorsToDisplay " , actorsToDisplay)
      console.log("Next Btn Change actors " , actors)
    }
  }

  function handlePrevPage() {
    if (pageId >= 2) {
      setPageId((pageId) => (pageId -= 1))
      console.log("Prev Btn Change actorsToDisplay " , actorsToDisplay)
      console.log("Prev Btn Change actors " , actors)
    }
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  return (
    
    <>
      <Navbar onSearchChange={handleSearchChange} search={searchText} />
      <main 
          style={{ backgroundColor: "rgb(238, 238, 238)" }}
          className="flex min-h-screen flex-col items-center p-4"
      >
          <h2
              style={{ color: "rgb(49, 54, 63)" }}
              className={`mb-3 text-2xl font-semibold`}
          >
              Actors
          </h2>
          <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
          <div className="flex flex-wrap justify-center">
            {!actorsToDisplay.length ? (<h1 className="text-center">Loading......</h1>) :
              (actorsToDisplay.slice(startIndex, endIndex).map((movie) => {
                return (
                  <ActorCards
                    key={actor.id}
                    actor={actor}
                    actorName={actor.name}
                    actorImage={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                  />
                )}
              ))}
          </div>
          <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
      </main>
    </>
  )
}