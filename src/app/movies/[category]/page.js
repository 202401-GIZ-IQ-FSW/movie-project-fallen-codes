"use client"
import React, { useState, useEffect } from 'react'
import { moviesData } from '@/data/moviesData'
import Navbar from '@/components/Navbar/Navbar'
import MovieCards from '@/components/Cards/MovieCards'
import NavButtons from "@/components/Buttons/NavButtons"

export default function Movies({params}) {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([])
  const [pageId, setPageId] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState({})
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieItems = await moviesData(params.category)
        const results = movieItems.results
        setMovies(results)
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    };
    fetchMovies()
    console.log("fetching-movies")
  }, [params.category])

  // Calculate the index range for the movies to display
  const startIndex = (pageId - 1) * 20
  const endIndex = startIndex + 20

  const moviesToDisplay = movies.filter((movie) => {
    if (selectedGenre.name === "All" && !searchText) return true;
    const genreMatch = movie.genre_ids.includes(selectedGenre.id);
    const nameMatch = movie.title.toLowerCase().includes(searchText.toLowerCase());
    return genreMatch && nameMatch;
  });

  // useEffect ( () => {
  //   setSelectedMovies(movies.filter(movie => movie.genre_ids.includes(selectedGenre.id)))
  //   setPageId(1)
  //   console.log("Genre Change " , selectedMovies)
  // },[selectedGenre])


  function handleNextPage() {
    if (pageId <= Math.floor(moviesToDisplay.length/20)) {
      setPageId((pageId) => (pageId += 1))
      console.log("Next Btn Change " , moviesToDisplay)
    }
  }

  function handlePrevPage() {
    if (pageId >= 2) {
      setPageId((pageId) => pageId -= 1)
      console.log("Next Btn Change " , moviesToDisplay)
    }
  }

  const formattedCategory = function capitalizeFirstLetter(string) {
    return string.replace(/_/g, ' ').replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    })
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <Navbar onSelectedGenre={setSelectedGenre} onSearchChange={handleSearchChange} search={searchText}/>
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
          {!moviesToDisplay.length ? (<h1 className="text-center">Loading......</h1>) :
            (moviesToDisplay.slice(startIndex, endIndex).map(movie => { 
              return (
                <MovieCards 
                  key={movie.id}
                  movie={movie}
                />
              )
            }))
          }
        </div>
        <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
      </main>
    </>
  )
}
