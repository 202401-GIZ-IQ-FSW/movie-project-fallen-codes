"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import dropDownIcon from '/public/drop-down.svg';

export default function DropDown({ menuType, selectionMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="pr-4 relative hover:bg-slate-200 " onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className='p-2 pt-1 pr-1 pb-1 flex flex-row items-center' onClick={toggleMenu}>
        {menuType}
        <span className="pl-3">
          <Image
            className=''
            src={dropDownIcon}
            alt='search icon'
            width={15}
          />
        </span>
      </button>
      {isOpen && (
        <div className='absolute cursor-pointer bg-slate-200 p-2'>
          <ul>
            {selectionMenu.map(option => (
              <li className={`hover:text-blue-700 w-max ${ menuType === "Genres" ? "mr-7" : "mr-0" } `} key={option} onClick={handleOptionClick}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}