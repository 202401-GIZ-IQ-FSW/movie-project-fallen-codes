import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function MoviesMenu() {
  
  const moviesMenu = ["Now playing", "Popular", "Top Rated", "Upcoming"]

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {setIsOpen(!isOpen)}
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && event.target.id !== 'movies-menu-button') {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div 
      className="px-1 relative"
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
      >
      <button 
        id="movies-menu-button"
        className='p-2 pt-1 pr-1 pb-1 flex flex-row items-center hover:text-[#0C2D57]'
        onClick={toggleMenu}
        >
        Movies
        <span className="pl-3">
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </button>
      { isOpen && 
          ( <div
            id="myInput"
            className='absolute bg-black p-2 z-20 rounded-lg'>
              <ul>
                {moviesMenu.map(category => (
                  <li 
                    className="hover:text-[#fc6736] cursor-pointer w-max mr-0"
                    key={category}
                  >
                    <Link href={`/movies/${category.toLowerCase().replace(" ", "_")}`}>{category}</Link>
                  </li>
                ))}
              </ul>
            </div> )
          }
    </div>
  )
}

