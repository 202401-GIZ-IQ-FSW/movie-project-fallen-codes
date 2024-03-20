
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/next.svg'
import DropDown from '../Menu/DropDown'
export default function Navbar() {
  return (
    <nav className="m-10 flex flex-row justify-between">
      <div className="m-4 flex flex-row">
          <Image
            className="m-2"
            src={Logo}
            alt='Site logo'
            width={70}
          />
          <h1 className="m-2">Fallen Codes</h1>
      </div>
      <div className="m-4 flex flex-row">
          <Link href="/" className="m-2">Home</Link>
          <Link href="/movies" className="m-2"> <DropDown/> </Link>
          <Link href="/actors" className="m-2">Actors</Link>
      </div>
    </nav>
  )
}
