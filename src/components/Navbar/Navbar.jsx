"use client"
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/logo-black.svg'
import searchIcon from '/public/search-icon.svg'
import GenresMenu from '../Menu/GenresMenu'
import MoviesMenu from '../Menu/MoviesMenu'
import {genresList} from '@/data/genresList'

=======
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "/public/logo-white.svg"
import searchIcon from "/public/search-icon.svg"
import GenresMenu from "../Menu/GenresMenu"
import MoviesMenu from "../Menu/MoviesMenu"
import { genresList } from "@/data/genresList"
>>>>>>> 327d05c0bb050c1a38df3f6f921032b34144242a

export default function Navbar() {
  const moviesMenu = ["Now playing", "Popular", "Top Rated", "Upcoming"]

  const [genresMenu, setGenresMenu] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreOptions = await genresList()
        setGenresMenu(genreOptions.genres)
      } catch (error) {
        console.error("Error fetching genres:", error)
      }
    }
    fetchGenres()
    console.log("fetching-genres-navbar")
  }, [])

  return (
<<<<<<< HEAD
    <nav className="bg-red-900 m-4 flex flex-wrap lg:flex-row justify-center lg:justify-between items-center rounded-xl">
=======
    <nav className=" m-6 flex flex-wrap lg:flex-row justify-center lg:justify-between items-center">
>>>>>>> 327d05c0bb050c1a38df3f6f921032b34144242a
      <div className="flex flex-row items-center">
        <Image
          className="mr-2 rounded-full size-60 "
          src={Logo}
          alt="site logo"
<<<<<<< HEAD
          width={100}
        />
      </div>
      <div className="mt-4 lg:mt-2 m-2 flex flex-row items-center">
        <Link href="/" className="mx-2 p-2 text-slate-300">
          Home
        </Link>
        <div className="mx-2 text-slate-300">
          <MoviesMenu menuType="Movies" selectionMenu={moviesMenu} />
        </div>
        <div className="mx-2 text-slate-300">
          <GenresMenu menuType="Genres" selectionMenu={genresMenu} />
        </div>
        <Link href="/actors" className="mx-1 p-1 text-slate-300">
          Actors
        </Link>
      </div>
      <div className="mt-4 lg:mt-0 ml-2 relative pb-1 pr-2">
        <input
          className="p-2 pl-12 rounded-xl"
=======
          width={70}
        />
      </div>
      <div className="mt-4 lg:mt-2 m-2 flex flex-row items-center">
        <Link href="/" className="mx-2 p-2">
          Home
        </Link>
        <div className="mx-2">
          <MoviesMenu menuType="Movies" selectionMenu={moviesMenu} />
        </div>
        <div className="mx-2">
          <GenresMenu menuType="Genres" selectionMenu={genresMenu} />
        </div>
        <Link href="/actors" className="mx-1 p-1">
          Actors
        </Link>
      </div>
      <div className="mt-4 lg:mt-0 ml-2 relative">
        <input
          className="p-2 pl-12"
>>>>>>> 327d05c0bb050c1a38df3f6f921032b34144242a
          type="text"
          name="search"
          placeholder="Search for movies..."
        />
        <span className="flex items-center p-2 pr-4 absolute left-1 top-1 ">
          <Image src={searchIcon} alt="search icon" width={20} />
        </span>
      </div>
    </nav>
  )
}
