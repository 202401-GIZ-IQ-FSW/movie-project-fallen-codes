"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { moviesNowPlaying } from '@/data/moviesData'
import { genresList } from '@/data/genresList'
import MovieCards from '@/components/MovieCards/MovieCards'

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await moviesNowPlaying();
        const movies = moviesData.results;
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchMovies();
    console.log("fetching-movies")
  }, []);
  
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreOptions = await genresList();
        setMovieGenres(genreOptions.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
    console.log("fetching-genres")
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="p-4 relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <h2 className={`mb-3 text-2xl font-semibold`}>Now Playing</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {movies.map(movie => { 
            const movieGenre = movie.genre_ids.map(genreID => {
              const genre = movieGenres.find(genre => genre.id === genreID);
              return genre ? genre.name : ''; // Check if genre is defined before accessing its name
            }).join(", ");
          
            return (
                <MovieCards 
                  key={movie.id}
                  title={movie.title} 
                  releaseYear={movie.release_date.slice(0, 4)} 
                  genre={movieGenre} 
                  poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                />
            );
        })}
      </div>
    </main>
  );
}

