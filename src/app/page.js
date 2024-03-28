"use client"
import React, { useState, useEffect } from "react"
// import { moviesData } from "@/data/moviesData"
import { moviesDataAll } from "@/data/moviesData"
// import { genresList } from "@/data/genresList"
import MovieCards from "@/components/Cards/MovieCards"
import NavButtons from "@/components/Buttons/NavButtons"
import Navbar from "@/components/Navbar/Navbar"

export default function Home() {
  // const [movieGenres, setMovieGenres] = useState([])
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [pageId, setPageId] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState({name:"All"})
  const [searchText, setSearchText] = useState("");
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);
  const startIndex = (pageId - 1) * 20
  const endIndex = startIndex + 20
  
  const fetchMovies = async () => {
    let allMovies = [];
    let currentPage = 1;
    let total = 1;
    const movieItems = await moviesDataAll(currentPage);
    // allMovies = allMovies.concat(movieItems.results);
    total = movieItems.total_pages/1000;
    // Loop until all pages are fetched
    while (currentPage <= total) {
      try {
        const movieItems = await moviesDataAll(currentPage);
        allMovies = allMovies.concat(movieItems.results);
        currentPage++;
      } catch (error) {
        console.error("Error fetching movies:", error);
        break; // Exit loop on error
      }
    }
    setMovies(allMovies);
    setMoviesToDisplay(allMovies)
    setTotalPages(total);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // const fetchMovies = async (pageId) => {
  //   try {
  //     const movieItems = await moviesData(pageId);
  //     setMovies(movieItems.results);
  //     setTotalPages(movieItems.total_pages);
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies(pageId);
  // }, [pageId]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const movieItems = await moviesData(pageId)
  //       const results = movieItems.results
  //       setMovies(results)
  //       const resultsTotalPages = movieItems.total_pages
  //       setTotalPages(resultsTotalPages)
  //     } catch (error) {
  //       console.error("Error fetching genres:", error)
  //     }
  //   }
  //   fetchMovies()
  //   console.log("fetching-movies")
  // }, [pageId])

  // useEffect(() => {
  //   const fetchGenres = async () => {
  //     try {
  //       const genreOptions = await genresList()
  //       setMovieGenres(genreOptions.genres)
  //     } catch (error) {
  //       console.error("Error fetching genres:", error)
  //     }
  //   }
  //   fetchGenres()
  //   console.log("fetching-genres")
  // }, [])

  useEffect(() => {
    // Recalculate moviesToDisplay when selectedGenre or searchText changes
    const filteredMovies = movies.filter((movie) => {
      if (selectedGenre.name === "All" && !searchText) return true;
      const nameMatch = movie.title.toLowerCase().includes(searchText.toLowerCase());
      if (selectedGenre.name === "All" && nameMatch) return true;
      const genreMatch = movie.genre_ids.includes(selectedGenre.id);
      return genreMatch && nameMatch;
    });
    // Reset pageId when selectedGenre or searchText changes
    setPageId(1);
    setMoviesToDisplay(filteredMovies);
  }, [selectedGenre, searchText]);

  function handleSearchChange(event) {
    setSearchText(event.target.value);
    
  }

  function onSelectedGenre(option) {
    setSelectedGenre(option);
    
  }

  function handleNextPage() {
    if (pageId >= 1 && pageId <= Math.floor(moviesToDisplay.length/20)) {
      setPageId((pageId) => (pageId += 1))
    }
  }

  function handlePrevPage() {
    if (pageId >= 2) {
      setPageId((pageId) => (pageId -= 1))
    }
  }
  
  console.log("moviesToDisplay ", moviesToDisplay)
  console.log("movies ", movies)
  console.log("Total Pages ", totalPages)
  console.log("NextPage startIndex ", startIndex)
  console.log("NextPage endIndex ", endIndex)

  return (
    <>
      <Navbar onSelectedGenre={setSelectedGenre} onSearchChange={handleSearchChange} search={searchText}/>
      <main
        style={{ backgroundColor: "rgb(12, 45, 87)" }}
        className="flex min-h-screen flex-col items-center p-4"
      >
        <NavButtons
          pageId={pageId}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
        <div className="flex flex-wrap justify-center">
          {moviesToDisplay.slice(startIndex, endIndex).map((movie, index) => {
            // const movieGenre = movie.genre_ids
            //   .map((genreID) => {
            //     const genre = movieGenres.find((genre) => genre.id === genreID)
            //     return genre ? genre.name : "" // Check if genre is defined before accessing its name
            //   })
            //   .join(", ")
  
            return (
              <MovieCards
                key={index}
                movie={movie}
                // genre={movieGenre}
                // releaseYear={movie.release_date.slice(0, 4)}
                // ratings={movie.vote_average.toFixed(1)} // added ratings
              />
            )
          })}
        </div>
        <NavButtons
          pageId={pageId}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </main>
    </>
  )
}
