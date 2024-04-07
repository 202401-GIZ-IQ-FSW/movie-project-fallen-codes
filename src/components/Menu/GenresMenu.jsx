import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function GenresMenu({ selectionMenu, onSelectedGenre }) {
  
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {setIsOpen(!isOpen)}
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && event.target.id !== 'genres-menu-button') {
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
        id="genres-menu-button"
        className="p-2 pt-1 pr-1 pb-1 flex flex-row items-center hover:text-[#0C2D57]"
        onClick={toggleMenu}
      >
        Genres
        <span className="pl-3">
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </button>
      { isOpen &&
          ( <div className="absolute bg-black p-2 z-20 rounded-lg max-h-40 overflow-y-auto">
              <ul>
                {selectionMenu.map((option, index) => (
                  <li
                    className="hover:text-[#fc6736] w-max cursor-pointer"
                    key={index}
                    onClick={() => {
                      onSelectedGenre(option)
                    }}
                  >
                    {option.name}
                  </li>
                ))}
              </ul>
            </div> )
          }
    </div>
  )
}
