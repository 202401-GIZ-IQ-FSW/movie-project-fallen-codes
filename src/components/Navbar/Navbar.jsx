"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "/public/logo-black.svg"
import searchIcon from "/public/search-icon.svg"
import GenresMenu from "../Menu/GenresMenu"
import MoviesMenu from "../Menu/MoviesMenu"
import { genresList } from "@/data/genresList"

export default function Navbar({onSelectedGenre, onSearchChange, search}) {
  const moviesMenu = ["Now playing", "Popular", "Top Rated", "Upcoming"]
  const [genresMenu, setGenresMenu] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreOptions = await genresList()
        setGenresMenu([{name:"All"}, ...genreOptions.genres])
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }
    fetchGenres()
    console.log("fetching-genres-navbar")
  }, [])

  return (
    <nav
      style={{ backgroundColor: "rgb(12, 45, 87)" }}
      className="flex flex-wrap lg:flex-row justify-center lg:justify-between items-center "
    >
      <div className="flex flex-row items-center">
        <Image
          style={{ borderColor: "rgb(252, 103, 54)" }}
          className="mr-2 rounded-full m-4 size-36 bg-transparent border-solid border-4"
          src={Logo}
          alt="site logo"
          width={100}
        />
      </div>
      <div
        style={{ backgroundColor: "rgb(252, 103, 54)" }}
        className=" rounded-2xl mt-4 mx-0 lg:mt-2 px-4 py-2 flex flex-row items-center border-solid border-2 border-white"
      >
        <Link href="/" className="mx-2 p-2 text-white">
          Home
        </Link>
        <div className="mx-2 text-white">
          <MoviesMenu menuType="Movies" selectionMenu={moviesMenu} />
        </div>
        <div className="mx-2 text-white">
          <GenresMenu menuType="Genres" selectionMenu={genresMenu} onSelectedGenre={onSelectedGenre} />
        </div>
        <Link href="/actors" className="mx-1 p-1 text-white">
          Actors
        </Link>
      </div>
      <div className="ml-12 mt-4 mr-12 lg:mt-0 relative pb-1 pr-2 sm:pb-0 sm:pr-0 ">
        <input
          style={{ borderColor: "rgb(252, 103, 54)", color: "rgb(12, 45, 87)" }}
          className="p-2  pl-10  rounded-xl border-solid border-4"
          type="text"
          name="search"
          placeholder="Search for movies..."
          value={search} // Connect input to state
          onChange={onSearchChange} // Update state when input changes
        />
        <span className="flex items-center p-2 pr-4 absolute left-1 top-1 fill-orange ">
          <Image src={searchIcon} alt="search icon" width={20} />
        </span>
      </div>
    </nav>
  )
}
