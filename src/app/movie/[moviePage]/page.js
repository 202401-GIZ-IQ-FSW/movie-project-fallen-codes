import MoviePage from "@/components/Pages/MoviePage"
import { movieData } from "@/data/movieData"
import Navbar from "@/components/Navbar/Navbar"


export default async function Movie({ params }) {
  
  const searchType = "Movies"
  const movieId = params.moviePage
  const movie = await movieData(movieId)
  const credits = await movieData(movieId, `/credits`)
  const trailers = await movieData(movieId, `/videos`)
  const recommendMovies = await movieData(movieId, `/recommendations`)
  const similarMovies = await movieData(movieId, `/similar`)
  const displayMovies = await recommendMovies?.length ? recommendMovies : similarMovies

  return (
    <>
      <Navbar searchType={searchType}/>
      <div>
        <MoviePage movie={movie} credits={credits} displayMovies={displayMovies} trailers={trailers} />
      </div>
    </>
  )
}
