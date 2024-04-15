"use client"
import React, {useState, useEffect} from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { searchData } from '@/data/searchData'


export default function SearchField({searchType, onSearchChange, inSearchPage}) {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const listType = searchType?.toLowerCase() === "movies" ? true : false

  async function fetchResults(searchQuery) {
    const searchItems = await searchData(1, searchQuery, searchType)
    setSearchResults(searchItems.results.slice(0,5))
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && event.target.id !== 'search-field') {
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
      className="block relative w-full"
    >
      <input
          id='search-field'
          style={{ borderColor: "rgb(252, 103, 54)", color: "rgb(12, 45, 87)" }}
          className="p-2 pl-10 rounded-xl border-solid border-4"
          type="text"
          name="search"
          placeholder={`Search for ${searchType}...`}
          value={searchText} // Connect input to state
          onChange={ (e) => {  
            fetchResults(e.target.value); 
            setSearchText(e.target.value); 
            onSearchChange ? onSearchChange(e.target.value) : ""; 
            }}
          onFocus={() => setIsOpen(true)}
        />
        <span className="flex items-center p-2 pr-4 absolute left-2 top-2 fill-orange ">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        { searchResults?.length && isOpen && !inSearchPage ?
            ( <div
              className="absolute rounded-lg bg-black text-white top-full py-2 px-2 overflow-auto max-h-44 md:max-h-72 w-full shadow-md z-20">
                { searchResults?.map((item) => (
                    <Link key={item.id} href={ listType ? `/movie/${item.id}?${item.title.toLowerCase().replace(/ /g, "_")}` : `/actors/${item.id}?${item.name.toLowerCase().replace(/ /g, "_")}` }>
                      <div onBlur={()=>setShowResults(false)} className="p-1 flex flex-row items-start max-w-full rounded-lg hover:bg-slate-600">
                        <img
                          className="w-14 mr-2 rounded-lg"
                          src={`https://image.tmdb.org/t/p/w200${ listType ? item.poster_path : item.profile_path }`}
                          />
                        <div className="mt-1">
                          <p className="text-sm font-semibold">
                            { listType ? item.title : item.name }
                          </p>
                          <p className="text-xs">{ listType ? item.release_date.slice(0,4) : "" }</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                <Link href={`/search_results/${searchType ? searchType.toLowerCase() : ''}?search=${searchText}`}>
                  <span className="text-white flex justify-center p-2 hover:bg-slate-500 rounded-lg">
                  See More
                  </span>
                </Link>
            </div> )
          : ""
        }
    </div>
  )
}
