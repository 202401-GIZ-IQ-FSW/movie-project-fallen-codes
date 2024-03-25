"use client"
import React, { useState, useEffect } from 'react'
import ActorPage from '@/components/Pages/ActorPage'
import { actorData } from '@/data/actorData'

export default function page({params}) {
  const [actor, setActor] = useState([]);
  
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const actorId = params.actor
        const actorItem = await actorData(actorId)
        setActor(actorItem)
      } catch (error) {
        console.error('Error fetching movie:', error)
      }
    };
    fetchMovie()
    console.log("fetching-movie")
  }, [])

  return (
    <div>
      <ActorPage actor={actor}/>
    </div>
  )
}
