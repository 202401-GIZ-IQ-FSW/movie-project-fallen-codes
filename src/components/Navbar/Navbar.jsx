"use client"
import React, {useState, useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "/public/logo-black.svg"
import GenresMenu from "../Menu/GenresMenu"
import MoviesMenu from "../Menu/MoviesMenu"
import { genresList } from "@/data/genresList"
import SearchField from "../SearchField/SearchField"

export default function Navbar({onSelectedGenre, onSearchChange, searchType, inSearchPage=false}) {

  const [genresMenu, setGenresMenu] = useState([])

  const fetchGenres = async () => {
    try {
      const genreOptions = await genresList
      setGenresMenu([{name:"All"}, ...genreOptions.genres])
    } catch (error) {
      console.error("Error fetching genres:", error)
    }
  }

  useEffect(() => {
    fetchGenres()
    console.log("fetching-genres-navbar")
  }, [])


  return (
    <nav
      style={{ backgroundColor: "rgb(12, 45, 87)" }}
      className="pb-4 flex flex-col justify-center items-center lg:flex-row lg:justify-between"
    >
      <div className="lg:mx-4">
        <Link href="/" >
          <Image
            style={{ borderColor: "rgb(252, 103, 54)" }}
            className="rounded-full m-4 ml-2 size-36 bg-transparent border-solid border-4"
            src={Logo}
            alt="site logo"
            width={100}
          />
        </Link>
      </div>
      <div
        style={{ backgroundColor: "rgb(252, 103, 54)" }}
        className="w-11/12 md:w-3/6 lg:w-2/6 rounded-2xl mt-4 lg:ml-8 lg:mt-2 px-4 py-2 flex flex-row justify-center items-center border-solid border-2 border-white"
      >
        <Link href="/" className="mx-2 p-2 text-white hover:text-[#0C2D57]">
          Home
        </Link>
        <div className="mx-2 text-white ">
          <MoviesMenu />
        </div>
        <div className="mx-2 text-white">
          <GenresMenu selectionMenu={genresMenu} onSelectedGenre={onSelectedGenre} />
        </div>
        <Link href="/actors" className="mx-2 p-2 text-white hover:text-[#0C2D57]">
          Actors
        </Link>
      </div>
      <div className="flex justify-center mt-4 lg:mt-2 lg:mr-12 relative pb-1 pl-1 sm:pb-0 sm:pr-0 ">
        <SearchField searchType={searchType} onSearchChange={onSearchChange} inSearchPage={inSearchPage}/>
      </div>
    </nav>
  )
}
