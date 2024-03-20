"use client"
import React, { useState } from 'react';

export default function DropDown({ menuType, selectionMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button  onClick={toggleMenu}>
        {menuType}
      </button>
      {isOpen && (
        <div className='absolute cursor-pointer'>
          <ul>
            {selectionMenu.map(option => (
              <li key={option} onClick={handleOptionClick}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}