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
  const [allGenres, setAllGenres] = useState([{ name: "All" }])
  
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreOptions = await genresList()
        setGenresMenu(genreOptions.genres)
        setAllGenres([{ name: "All" }, ...genreOptions.genres])
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }
    fetchGenres()
    console.log("fetching-genres-navbar")
  }, [])

  return (
    <nav
      style={{ backgroundColor: "rgb(118, 171, 174)" }}
      className="m-4 flex flex-wrap lg:flex-row justify-center lg:justify-between items-center rounded-xl"
    >
      <div className="flex flex-row items-center">
        <Image
          className="mr-2 rounded-md size-36 "
          src={Logo}
          alt="site logo"
          width={100}
        />
      </div>
      <div
        style={{ backgroundColor: "rgb(49, 54, 63)" }}
        className="px-8 py-2 rounded-2xl mt-4 lg:mt-2 m-2 flex flex-row items-center"
      >
        <Link href="/" className="mx-2 p-2 text-slate-300">
          Home
        </Link>
        <div className="mx-2 text-slate-300">
          <MoviesMenu menuType="Movies" selectionMenu={moviesMenu} />
        </div>
        <div className="mx-2 text-slate-300">
          <GenresMenu menuType="Genres" selectionMenu={allGenres} onSelectedGenre={onSelectedGenre}/>
        </div>
        <Link href="/actors" className="mx-1 p-1 text-slate-300">
          Actors
        </Link>
      </div>
      <div className="mt-4 lg:mt-0 ml-2 relative pb-1 pr-2">
        <input
          className="p-2 pl-12 rounded-xl"
          type="text"
          name="search"
          placeholder="Search for movies..."
          value={search} // Connect input to state
          onChange={onSearchChange} // Update state when input changes
        />
        <span className="flex items-center p-2 pr-4 absolute left-1 top-1 ">
          <Image src={searchIcon} alt="search icon" width={20} />
        </span>
      </div>
    </nav>
  )
}
