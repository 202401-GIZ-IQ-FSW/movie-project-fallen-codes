"use client"
import React, { useState, useEffect } from "react"
import { actorsData } from "@/data/actorsData"
import ActorCard from "@/components/Cards/ActorCard"
import NavButtons from "@/components/Buttons/NavButtons"
import Navbar from "@/components/Navbar/Navbar"
import EmptyCardLoader from '@/components/Cards/EmptyCardLoader'

export default function Actors() {

  const [actors, setActors] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [pageId, setPageId] = useState(1)
  const searchType = "Actors"

  const fetchActors = async () => {
    try {
      const actorsList = await actorsData(pageId)
      const results = await actorsList.results
      setActors(results)
      const resultsTotalPages = actorsList.total_pages
      setTotalPages(resultsTotalPages)
    } catch (error) {
      console.error("Error fetching genres:", error)
    }
  }

  useEffect(() => {
    fetchActors()
    console.log("fetching-actors")
  }, [pageId])

  function handleNextPage() {
    if (pageId < totalPages) {
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
      <Navbar searchType={searchType} />
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
          { !actors?.length ?
              ( <div className='flex flex-row items-center'>
                  <EmptyCardLoader/>
                </div> )
            :
              ( <div className="flex flex-wrap justify-center">
                { actors.map((actor) => 
                    <ActorCard key={actor.id} actor={actor} />
                  )}
              </div> ) 
            }
          <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
      </main>
    </>
  )
}