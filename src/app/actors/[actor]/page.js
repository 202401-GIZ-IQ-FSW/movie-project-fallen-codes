"use client"
import React, { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar/Navbar"
import ActorPage from '@/components/Pages/ActorPage'
import { actorData } from '@/data/actorData'

export default function Actor({params}) {
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
    console.log("fetching-actor")
  }, [])

  return (
    <>
      <Navbar />
      <div>
        <ActorPage actor={actor}/>
      </div>
    </>
  )
}
