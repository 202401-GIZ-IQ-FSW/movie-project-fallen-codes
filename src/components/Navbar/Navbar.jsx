"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/logo-fallen-codes-1.png'
import searchIcon from '/public/search-icon.svg'
import DropDown from '../Menu/DropDown'
import {genresList} from '@/data/genresList'


export default function Navbar({ menuType }) {
  const moviesMenu = ["Top Rate", "Popular", "Latest", "Now playing", "Upcoming"];
  // get genres data from api
  // ["Action", "Drama", "Comedy", "SiFi", "Fiction"]
  const [genresMenu, setGenresMenu] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genres = await genresList();
        setGenresMenu(genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
    console.log("fetching-data")
  }, []);

  return (
    <nav className="m-10 flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <img src="./" alt=""  />
          <Image
            className="mr-2 rounded-full"
            src={Logo}
            alt='site logo'
            width={70}
          />
          <h1 className="m-2">Fallen Codes</h1>
      </div>
      <div className="m-2 flex flex-row items-center">
          <Link href="/" className="mx-2 p-2">Home</Link>
          <Link href="/movies" className="mx-2"> <DropDown menuType={menuType[0]} selectionMenu={moviesMenu}/> </Link>
          <div className='mx-2'><DropDown menuType={menuType[1]} selectionMenu={genresMenu.genres} /></div>
          <Link href="/actors" className="mx-1 p-1">Actors</Link>
      </div>
      <div className="ml-2 relative">
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
