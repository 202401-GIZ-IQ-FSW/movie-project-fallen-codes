"use client"
import React, { useState, useEffect } from 'react'
import { moviesData } from '@/data/moviesData'
import { genresList } from '@/data/genresList'
import MovieCards from '@/components/Cards/MovieCards'
import NavButtons from "@/components/Buttons/NavButtons"

export default function Movies({params}) {
  const [movieGenres, setMovieGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1)
  const [pageId, setPageId] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieItems = await moviesData(pageId, params.category)
        const results = movieItems.results
        setMovies(results)
        const resultsTotalPages = movieItems.total_pages
        setTotalPages(resultsTotalPages)
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    };
    fetchMovies()
    console.log("fetching-movies")
  }, [params.category, pageId])
  
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreOptions = await genresList()
        setMovieGenres(genreOptions.genres)
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    }
    fetchGenres()
    console.log("fetching-genres")
  }, []);

  function handleNextPage() {
    if (pageId >= 1 && pageId <= totalPages) {
      setPageId((pageId) => pageId += 1) 
    }
  }
  
  function handlePrevPage() {
    if (pageId >= 2) {
      setPageId((pageId) => pageId -= 1)
    }
  }

  const formattedCategory = function capitalizeFirstLetter(string) {
    return string.replace(/_/g, ' ').replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    })
  }

  return (
    <main
      style={{ backgroundColor: "rgb(238, 238, 238)" }}
      className="flex min-h-screen flex-col items-center p-4"
    >
      <h2
        style={{ color: "rgb(49, 54, 63)" }}
        className={`mb-3 text-2xl font-semibold`}
      >
        {formattedCategory(params.category)}
      </h2>
      <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
      <div className="flex flex-wrap justify-center">
        {movies.map(movie => { 
          const movieGenre = movie.genre_ids.map(genreID => {
            const genre = movieGenres.find(genre => genre.id === genreID)
            return genre ? genre.name : '' // Check if genre is defined before accessing its name
          }).join(", ")
        
                return (
                    <MovieCards 
                        key={movie.id}
                        movie={movie}
                        genre={movieGenre} 
                        releaseYear={movie.release_date.slice(0, 4)} 
                        ratings={movie.vote_average.toFixed(1)} // added ratings
                    />
                )
            })}
      </div>
      <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
    </main>
  )
}
