"use client"
import React, { useState } from "react"
import Image from "next/image"
import dropDownIcon from "/public/drop-down.svg"

export default function GenresMenu({ menuType, selectionMenu, onSelectedGenre }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = () => {
    setIsOpen(false)
  }

  return (
    <div
      className="pr-4 relative hover:bg-black "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="p-2 pt-1 pr-1 pb-1 flex flex-row items-center"
        onClick={toggleMenu}
      >
        {menuType}
        <span className="pl-3">
          <Image src={dropDownIcon} alt="search icon" width={15} />
        </span>
      </button>
      {isOpen && (
        <div className="absolute cursor-pointer bg-black p-2">
          <ul>
            {selectionMenu.map((option) => (
              <li
                className="hover:text-red-900 w-max mr-7"
                key={option.id}
                onClick={() => {
                  handleOptionClick()
                  onSelectedGenre(option)
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
