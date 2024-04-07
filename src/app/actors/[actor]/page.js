import React from 'react'
import ActorPage from '@/components/Pages/ActorPage'
import { actorData, actorMoviesData } from '@/data/actorData'
import Navbar from "@/components/Navbar/Navbar"

export default async function Actor({params}) {
  
  const searchType = "Actors"
  const actorId = params.actor
  const actor = await actorData(actorId)
  const movieList = await actorMoviesData(actorId)
  const actorMovies = await movieList.cast
  
  return (
    <>
      <Navbar searchType={searchType}/>
      <div>
        <ActorPage actor={actor} actorMovies={actorMovies} />
      </div>
    </>
  )
}
