
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/next.svg'
import searchIcon from '/public/search-icon.svg'
import DropDown from '../Menu/DropDown'

export default function Navbar() {
  const moviesMenu = ["Top Rate", "Popular", "Latest", "Now playing", "Upcoming"];
  const menuType = ["Movies", "Genres"];
  // get genres data from api
  const genresMenu = ["Action", "Drama", "Comedy", "SiFi", "Fiction"];
  return (
    <nav className="m-10 flex flex-row justify-between">
      <div className="flex flex-row">
          <Image
            className="mr-2"
            src={Logo}
            alt='site logo'
            width={70}
          />
          <h1 className="m-2">Fallen Codes</h1>
      </div>
      <div className="m-2 flex flex-row">
          <Link href="/" className="mx-4">Home</Link>
          <Link href="/movies" className="mx-4"> <DropDown menuType={menuType[0]} selectionMenu={moviesMenu}/> </Link>
          <div className='mx-4'><DropDown menuType={menuType[1]} selectionMenu={genresMenu} /></div>
          <Link href="/actors" className="mx-4">Actors</Link>
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
