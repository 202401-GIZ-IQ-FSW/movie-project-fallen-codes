"use client"
import React, { useState, useEffect } from 'react'
import MoviePage from '@/components/Pages/MoviePage'
import { movieData } from '@/data/movieData'

export default function Movie({params}) {
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieId = params.moviePage
        const movieItem = await movieData(movieId)
        setMovie(movieItem)
      } catch (error) {
        console.error('Error fetching movie:', error)
      }
    };
    fetchMovie()
    console.log("fetching-movie")
  }, [])
  
  return (
    <div>
      <MoviePage movie={movie} />
    </div>
  )
}
