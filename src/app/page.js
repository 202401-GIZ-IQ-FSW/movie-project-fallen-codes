"use client"
import React, { useState, useEffect } from "react"
import { moviesData } from "@/data/moviesData"
import { genresList } from "@/data/genresList"
import MovieCards from "@/components/MovieCards/MovieCards"

export default function Home() {
  const [movies, setMovies] = useState([])
  const [movieGenres, setMovieGenres] = useState([])
  const [pageId, setPageId] = useState(1)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieItems = await moviesData(pageId)
        const movies = movieItems.results
        setMovies(movies)
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }
    fetchMovies()
    console.log("fetching-movies")
  }, [pageId])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreOptions = await genresList()
        setMovieGenres(genreOptions.genres)
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }
    fetchGenres()
    console.log("fetching-genres")
  }, [])

  function handleNextPage() {
    if (pageId >= 1 && pageId <= 198) {
      setPageId((pageId) => (pageId += 1))
    }
  }

  function handlePrevPage() {
    if (pageId >= 2) {
      setPageId((pageId) => (pageId -= 1))
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <h2 className={`mb-3 text-2xl font-semibold`}>Now Playing</h2>
      <div className="flex flex-row justify-around m-2 p-2">
        <button className="m-2" onClick={handlePrevPage}>
          Pervious
        </button>
        <h1 className="m-2 mx-10"> {pageId} </h1>
        <button className="m-2" onClick={handleNextPage}>
          Next
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => {
          const genre = movieGenres.find((genre) => genre.id === movie.genre_ids[0]) ;
          const movieGenre = genre ? genre.name : "" ;
       // const movieGenre = movie.genre_ids.map(genreID => {
       //     const genre = movieGenres.find(genre => genre.id === genreID);
       //     return genre ? genre.name : ''; // Check if genre is defined before accessing its name
       //   }).join(", ");

          return (
            <MovieCards
              key={movie.id}
              title={movie.title}
              releaseYear={movie.release_date.slice(0, 4)}
              genre={movieGenre}
              poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              ratings={movie.vote_average.toFixed(1)} // added ratings
            />
          )
        })}
      </div>
    </main>
  )
}
