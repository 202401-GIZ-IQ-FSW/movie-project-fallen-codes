"use client"
import React, { useState, useEffect } from 'react'
import { searchData } from '@/data/searchData'
import MovieCard from '@/components/Cards/MovieCard'
import ActorCard from '@/components/Cards/ActorCard'
import NavButtons from "@/components/Buttons/NavButtons"
import Navbar from "@/components/Navbar/Navbar"
import EmptyCard from '@/components/Cards/EmptyCard'
import { useSearchParams } from 'next/navigation';


export default function Search({ params }) {

  const searchParams = useSearchParams();

  const [selectedGenre, setSelectedGenre] = useState({name:"All"})
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1)
  const [pageId, setPageId] = useState(1);
  const [searchText, setSearchText] = useState(searchParams.get('search'));

  const searchTypeCap = params.searchPage.charAt(0).toUpperCase() + params.searchPage.slice(1);
  const searchType = params.searchPage;
  const listType = searchType === "movies" ? true : false;

  const fetchMovies = async () => {
    try {
      const searchItems = await searchData(pageId, searchText, searchType)
      setSearchResults(searchItems.results)
      setTotalPages(searchItems.total_pages)
    } catch (error) {
      console.error('Error fetching genres:', error)
    }
  };

  useEffect(() => {
    fetchMovies()
    console.log("fetching-movies-search-page")
  }, [searchText, pageId])

  const filteredMovies = searchResults.filter((movie) => {
    if (selectedGenre.name === "All") return true
    const genreMatch = movie.genre_ids.includes(selectedGenre.id)
    return genreMatch;
    })
    
  function handleNextPage() {
    if (pageId < totalPages) {
      setPageId((pageId) => pageId += 1) 
    }
  }
  
  function handlePrevPage() {
    if (pageId >= 2) {
      setPageId((pageId) => pageId -= 1)
    }
  }

  function handleSearchChange(value) {
    setSearchText(value);
    setPageId(1)
  }
 
  return (
    <>
      <Navbar 
        onSelectedGenre={setSelectedGenre} 
        onSearchChange={handleSearchChange} 
        searchType={searchTypeCap}
        inSearchPage={true}
        />
      <main
        style={{ backgroundColor: "rgb(238, 238, 238)" }}
        className="flex min-h-screen flex-col items-center p-4"
      >
        <h2
          style={{ color: "rgb(49, 54, 63)" }}
          className={`mb-3 text-2xl font-semibold`}
        >
          {searchTypeCap}
        </h2>
          {!searchResults.length?
            (<div className='flex flex-row items-center'><EmptyCard/></div>)
            :
            (
              <>
                <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
                <div className="flex flex-wrap justify-center">
                  {filteredMovies.map(item => { 
                    return (
                      listType? 
                      (<MovieCard key={item.id} movie={item}/>)
                      : 
                      (<ActorCard key={item.id} actor={item}/>)
                    )
                  })}
                </div>
                <NavButtons pageId={pageId} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
              </>
            )
          }
      </main>
    </>
  )
}
