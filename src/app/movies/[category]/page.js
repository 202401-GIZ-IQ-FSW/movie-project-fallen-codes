"use client"
import React, { useState, useEffect } from 'react'
import { moviesData } from '@/data/moviesData'
import MovieCard from '@/components/Cards/MovieCard'
import NavButtons from "@/components/Buttons/NavButtons"
import Navbar from "@/components/Navbar/Navbar"
import EmptyCardLoader from '@/components/Cards/EmptyCardLoader'


export default function Movies({params}) {

  const [moviesToDisplay, setMoviesToDisplay] = useState([]);
  const [totalPages, setTotalPages] = useState(1)
  const [pageId, setPageId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState({name:"All"})
  const searchType = "Movies"
  
  const fetchMovies = async () => {
    try {
      const movieItems = await moviesData(pageId, params.category)
      const results = movieItems.results
      setMoviesToDisplay(results)
      const resultsTotalPages = movieItems.total_pages
      setTotalPages(resultsTotalPages)
    } catch (error) {
      console.error('Error fetching genres:', error)
    }
  }

  useEffect(() => {
    fetchMovies()
    console.log("fetching-movies")
  }, [params.category, pageId])

  const filteredMovies = moviesToDisplay?.filter((movie) => {
    if (selectedGenre.name === "All") return true
    const genreMatch = movie.genre_ids.includes(selectedGenre.id)
    return genreMatch;
    })
  
  function handleNextPage() {
    if (pageId < totalPages) {
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
    <>
      <Navbar onSelectedGenre={setSelectedGenre} searchType={searchType} />
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
          { !filteredMovies?.length ? 
                ( <div className='flex flex-row items-center'>
                    <EmptyCardLoader/>
                  </div> )
              :
                ( <div className="flex flex-wrap justify-center">
                    { filteredMovies.map(movie => 
                        <MovieCard  key={movie.id} movie={movie} />
                     )}
                  </div> )
              }
        <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
      </main>
    </>
  )
}
