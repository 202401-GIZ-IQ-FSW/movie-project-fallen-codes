import React from "react"
import { moviesData } from "@/data/moviesData"
import HomePage from "@/components/Pages/HomePage"


export default async function Home() {

  let allMoviesArray = []
  let currentPage = 1
  const categoriesAll = ["now_playing", "popular", "top_rated", "upcoming"]
  
  for (const category of categoriesAll) {
    let movieItems = []
    movieItems = await moviesData(currentPage, category);
    allMoviesArray.push(movieItems.results);
  }
    
  return (
      <>
        <HomePage allMoviesArray={allMoviesArray}/>
      </>
    )
}