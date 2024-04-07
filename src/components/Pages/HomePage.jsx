"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import MovieCard from "@/components/Cards/MovieCard"
import Navbar from "@/components/Navbar/Navbar"
import HomeCardLoader from "../Cards/HomeCardLoader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons"
import MainSlider from "../Slides/MainSlider"


export default function HomePage({allMoviesArray}) {
  
  const [selectedGenre, setSelectedGenre] = useState({name:"All"})
  
  const moviesMenu = ["Now playing", "Popular", "Top Rated", "Upcoming"]
  const [pageIds, setPageIds] = useState(Array(moviesMenu.length).fill(1))
  const searchType = "Movies"

  const filteredMovies = allMoviesArray?.map((movies) => {
    return movies.filter((movie) => {
    if (selectedGenre.name === "All") return true
    const genreMatch = movie.genre_ids.includes(selectedGenre.id)
    return genreMatch
    })
  })

  function handleNextPage(index) {
    setPageIds((prevPageIds) => {
      const newPageIds = [...prevPageIds];
      if (newPageIds[index] < Math.floor(filteredMovies[index].length / 5)) {
        newPageIds[index]++
      }
      return newPageIds
    })
  }

  function handlePrevPage(index) {
    setPageIds((prevPageIds) => {
      const newPageIds = [...prevPageIds];
      if (newPageIds[index] > 1) {
        newPageIds[index]--
      }
      return newPageIds
    })
  }
  
  return (
    <>
      <Navbar onSelectedGenre={setSelectedGenre} searchType={searchType} />
      <div className="bg-[#0C2D57] p-10">
        <MainSlider movies={allMoviesArray[0]} />
      </div>
      <main
        style={{ backgroundColor: "rgb(12, 45, 87)" }}
        className="flex min-h-screen flex-col items-center justify-evenly p-4"
      >
        { moviesMenu.map((option, index) => (
          <div key={index} className="mb-8 rounded-lg">
            <div className="mx-10 flex flex-row justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold text-slate-200">
                {option}
              </h2>
              <Link href={`/movies/${option.toLowerCase().replace(" ", "_")}`} className="text-white hover:text-[#fc6736]">
                See More &rarr;
              </Link>
            </div>
            <div className="flex flex-row items-center rounded-lg">
              { !filteredMovies[index]? 
                ( <HomeCardLoader /> )
                :
                ( <>
                    <div>
                      <FontAwesomeIcon onClick={() => handlePrevPage(index)} icon={faChevronCircleLeft}  className="bg-white text-[#fc6736] text-3xl rounded-full hover:cursor-pointer"/>
                    </div>
                    <div className="mx-1 mr-2 flex flex-row max-w-64 overflow-x-auto md:max-w-xl lg:mr-0 lg:max-w-full">
                      {filteredMovies[index]?.slice((pageIds[index] - 1) * 5, pageIds[index] * 5).map((movie, movieIndex) => (
                        <MovieCard key={movieIndex} movie={movie} />))}
                    </div>
                    <div>
                      <FontAwesomeIcon onClick={() => handleNextPage(index)} icon={faChevronCircleRight} className="bg-white text-[#fc6736] text-3xl rounded-full hover:cursor-pointer"/>
                    </div>
                  </> )
                }
            </div>
          </div> ))
        }
      </main>
    </>
  )
}