import DropDown from "@/components/Menu/GenresMenu"
import MovieCards from "@/components/MovieCards/MovieCards"
import React from "react"

export default function page() {
  return (
    <div className="m-4 flex justify-center">
      <h1 className="font-bold text-2xl">Movies</h1>
      <MovieCards />
    </div>
  )
}
