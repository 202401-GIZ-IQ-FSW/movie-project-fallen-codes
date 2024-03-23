"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { moviesNowPlaying } from '@/data/moviesData'
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const moviesData = await moviesNowPlaying();
        const movies = moviesData.results;
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
    console.log("fetching-movies")
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center p-10">

      <div className="p-4 relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <h2 className={`mb-3 text-2xl font-semibold`}>Now Playing</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {movies.map(movie => { 
          return (
            <div className='bg-blue-300 rounded-xl m-5 w-60' key={movie.id}>
              <img className='rounded-xl' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt='movie img'/>
              <div className='flex flex-col items-center justify-center p-2'>
                <h1 className='p-1 text-md text-center'>{movie.title}</h1>
                <h3 className='p-1 text-sm'>Rating: {movie.vote_average.toFixed(1)}</h3>
              </div>
            </div>
        );}
        )}
      </div>
    </main>
  );
}

