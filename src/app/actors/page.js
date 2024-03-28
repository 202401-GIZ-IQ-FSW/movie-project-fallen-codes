"use client"
import React, { useState, useEffect } from "react"
import { actorsData } from "@/data/actorsData"
import ActorCards from "@/components/Cards/ActorCards"
import NavButtons from "@/components/Buttons/NavButtons"
import Navbar from "@/components/Navbar/Navbar"

export default function Actors() {
  const [actors, setActors] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [pageId, setPageId] = useState(1)

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actorsList = await actorsData(pageId)
        const results = actorsList.results
        setActors(results)
        const resultsTotalPages = actorsList.total_pages
        setTotalPages(resultsTotalPages)
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }
    fetchActors()
    console.log("fetching-actors")
  }, [pageId])

  function handleNextPage() {
    if (pageId >= 1 && pageId <= totalPages) {
      setPageId((pageId) => (pageId += 1))
    }
  }

  function handlePrevPage() {
    if (pageId >= 1) {
      setPageId((pageId) => (pageId -= 1))
    }
  }

  return (
    <>
      <Navbar />
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
            {actors.map((actor) => {
              return (
                <ActorCards
                  key={actor.id}
                  actor={actor}
                  actorName={actor.name}
                  actorImage={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                />
              )
            })}
          </div>
          <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
      </main>
    </>
  )
}