"use client"
import React, { useState, useEffect } from "react"
import { moviesData } from "@/data/moviesData"
import { genresList } from "@/data/genresList"
import MovieCards from "@/components/MovieCards/MovieCards"

export default function Home() {
  const [movieGenres, setMovieGenres] = useState([])
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [pageId, setPageId] = useState(1)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieItems = await moviesData(pageId)
        const results = movieItems.results
        setMovies(results)
        const resultsTotalPages = movieItems.total_pages
        setTotalPages(resultsTotalPages)
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
    if (pageId >= 1 && pageId <= totalPages) {
      setPageId((pageId) => (pageId += 1))
    }
  }

  function handlePrevPage() {
    if (pageId >= 2) {
      setPageId((pageId) => (pageId -= 1))
    }
  }

  return (
    <main
      style={{ backgroundColor: "rgb(238, 238, 238)" }}
      className="flex min-h-screen flex-col items-center p-4"
    >
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <h2
        style={{ color: "rgb(49, 54, 63)" }}
        className={`mb-3 text-2xl font-semibold`}
      >
        Now Playing
      </h2>

      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => {
          const movieGenre = movie.genre_ids
            .map((genreID) => {
              const genre = movieGenres.find((genre) => genre.id === genreID)
              return genre ? genre.name : "" // Check if genre is defined before accessing its name
            })
            .join(", ")

          return (
            <MovieCards
              key={movie.id}
              title={movie.title}
              releaseYear={movie.release_date.slice(0, 4)}
              genre={movieGenre}
              poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            />
          )
        })}
      </div>
      <div
        style={{ backgroundColor: "rgb(118, 171, 174)" }}
        className="flex flex-row justify-around m-1 p-1 px-8 rounded-xl"
      >
        <button
          style={{ color: "rgb(49, 54, 63)" }}
          className="mx-1 font-bold"
          onClick={handlePrevPage}
        >
          Pervious
        </button>
        <h1
          style={{ color: "rgb(49, 54, 63)" }}
          className="m-2 mx-10 font-bold bg-slate-300 rounded-full px-3"
        >
          {" "}
          {pageId}{" "}
        </h1>
        <button
          style={{ color: "rgb(49, 54, 63)" }}
          className="m-2 font-bold pr-1"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </main>
  )
}
