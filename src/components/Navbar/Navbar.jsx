"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/logo-fallen-codes-1.png'
import searchIcon from '/public/search-icon.svg'
import GenresMenu from '../Menu/GenresMenu'
import MoviesMenu from '../Menu/MoviesMenu'
import {genresList} from '@/data/genresList'


export default function Navbar() {
  const moviesMenu = ["Now playing", "Popular", "Top Rated", "Upcoming"];
  
  const [genresMenu, setGenresMenu] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreOptions = await genresList();
        setGenresMenu(genreOptions.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
    console.log("fetching-genres-navbar")
  }, []);

  return (
    <nav className="m-10 flex flex-wrap lg:flex-row justify-center lg:justify-between items-center">
      <div className="flex flex-row items-center">
          <Image
            className="mr-2 rounded-full"
            src={Logo}
            alt='site logo'
            width={70}
          />
          <h1 className="m-2">Fallen Codes</h1>
      </div>
      <div className="mt-4 lg:mt-2 m-2 flex flex-row items-center">
          <Link href="/" className="mx-2 p-2">Home</Link>
          <Link href="/movies" className="mx-2"> <MoviesMenu menuType="Movies" selectionMenu={moviesMenu}/> </Link>
          <div className='mx-2'><GenresMenu menuType="Genres" selectionMenu={genresMenu} /></div>
          <Link href="/actors" className="mx-1 p-1">Actors</Link>
      </div>
      <div className="mt-4 lg:mt-0 ml-2 relative">
        <input className="p-2 pl-12" type="text" name="search" placeholder="Search for movies..." />
        <span className="flex items-center p-2 pr-4 absolute left-1 top-1 ">
          <Image
            src={searchIcon}
            alt='search icon'
            width={20}
          />
        </span>
      </div>
    </nav>
  )
}
