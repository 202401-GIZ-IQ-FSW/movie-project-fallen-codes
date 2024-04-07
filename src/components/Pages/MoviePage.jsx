import React from "react"
import ActorCard from "../Cards/ActorCard";
import MovieCard from "../Cards/MovieCard";
import EmptyCard from "../Cards/EmptyCard";


const MoviePage = async ({ movie, credits, displayMovies, trailers }) => {
  // const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'
  const ratings = (movie?.vote_average
    ? Math.floor(movie?.vote_average * 10) / 10
    : "N/A")
  const overview = movie?.overview.slice(0,200)
  const director = credits?.length ? credits.crew.find((person) => person?.job === "Director")?.name : ""
  const mainTrailer = trailers?.results?.find((video) => video?.site === "YouTube" && video?.type === "Trailer")
  
  return (
    <>
      {movie && (
        <main
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "1rem"
          }}
        >
          <div
            style={{ backdropFilter: "blur(3px)" }}
            className="mx-auto p-16 grid-cols-2 max-w-96 md:max-w-full md:flex justify-between "
          >
            <div className="md:mr-8 md:w-80 lg:w-96 rounded-lg">
              <img
                src={movie.poster_path?(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`):("/logo-white.svg")}
                alt={movie.title}
                className="w-60 h-72 md:w-auto md:h-[100%] mx-auto rounded-lg shadow-2xl shadow-orange-700 md:ml-2"
              />
            </div>
            <div
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
              className="p-4 rounded-lg text-xs md:text-base max-w-8/12 m-2  md:w-2/3 shadow-2xl shadow-orange-700 "
            >
              <h1
                style={{ color: "rgb(34, 40, 49)" }}
                className="text-sm md:text-3xl px-4 py-2 font-bold mb-2 bg-slate-200 rounded-md w-58 sm:mr-4 shadow-md hover:bg-slate-400"
              >
                {movie.title}
              </h1>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Release Date:{" "}
                </span>
                <span style={{ color: "rgb(252, 103, 54)" }}>
                  {movie.release_date}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Runtime:{" "}
                </span>
                <span style={{ color: "rgb(252, 103, 54)" }}>
                  {movie.runtime}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Language:{" "}
                </span>{" "}
                <span style={{ color: "rgb(252, 103, 54)" }}>
                  {movie.original_language?movie.original_language.toUpperCase():""}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(252, 103, 54)" }}
                  className="font-bold"
                >
                  Rating:{" "}
                </span>
                <span style={{ color: "rgb(252, 103, 54)" }}>{ratings}</span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Votes:{" "}
                </span>
                <span style={{ color: "rgb(252, 103, 54)" }}>
                  {movie.vote_count}
                </span>
              </p>
              <p>
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Director:{" "}
                </span>
                <span className="text-[#fc6736]">{director}</span>
              </p>
              <p style={{ color: "rgb(49, 54, 63)" }} className="py-3 my-2">
                <span
                  style={{ color: "rgb(49, 54, 63)" }}
                  className="font-bold"
                >
                  Description:{" "}
                </span>
                { movie?.overview.length > 200 ? 
                    ( <button className="pl-1 flex flex-wrap items-start group hover:cursor-pointer">
                        <span className="text-left block group-focus:hidden">{overview}...</span>
                        <span className="text-left hidden group-focus:block">{movie.overview}</span>
                        <span className="block group-focus:hidden text-[#fc6736] hover:text-[red]" >Read More</span>
                        <span className="hidden group-focus:block" ></span>
                      </button> )
                  : 
                    ( <span className="text-left">{movie.overview}</span> )
                  }
              </p>
              <div className='flex flex-col justify-start'>
                <p style={{ color: "rgb(49, 54, 63)" }} className="">
                  <span style={{ color: "rgb(49, 54, 63)" }} className="font-bold">
                    Production Companies: 
                  </span>
                </p>
                <div className="flex flex-row items-end md:items-start">
                  {movie.production_companies.slice(0,2).map(company => (
                    <div key={company.name} className='py-2 px-1 pr-4 flex flex-col '>
                      <p style={{ color: "rgb(49, 54, 63)" }} className="pb-1 pl-1 text-left">
                        <span style={{ color: "rgb(49, 54, 63)" }} className="font-bold text-[0.6rem] md:text-base">
                          {company.name}
                        </span>
                      </p>
                      <div className="self-center border-2 border-[#fc6736] rounded-2xl mb-2 p-1 w-20 md:w-36">
                        <img
                          src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                          alt={company.name}
                          className="overflow-hidden text-[0.5rem] text-center md:text-xs my-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 flex justify-center mb-12">
            <iframe
              title="trailer"
              className="w-5/6 h-80 border-2 border-[#fc6736] rounded-2xl"
              src={mainTrailer ? `https://www.youtube.com/embed/${mainTrailer.key}` : ""}
              allowFullScreen
              style={{
                backgroundImage: `url(/logo-white.svg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </div>
          <div className="mx-2 flex flex-row justify-center items-center pb-10 rounded-lg">
            <div className="mx-1 flex flex-row max-w-72 overflow-x-auto md:max-w-xl lg:max-w-full">
              { 
                ( !credits?.cast?.length ? 
                  ( <EmptyCard /> )
                :
                  ( credits.cast.slice(0, 5).map((actor, actorIndex) => (
                      <ActorCard key={actorIndex} actor={actor} /> )) ))
                }
            </div>
          </div>
          <div className="mx-2 flex flex-row justify-center items-center pb-10 rounded-lg">
            <div className="mx-1 flex flex-row max-w-72 overflow-x-auto md:max-w-xl lg:max-w-full">
              { 
                ( !displayMovies?.results?.length ?
                  ( <EmptyCard /> )
                :
                  ( displayMovies.results.slice(0, 5).map((movie, movieIndex) => (
                      <MovieCard key={movieIndex} movie={movie} /> )) ))
                }
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default MoviePage
