import React from 'react'
import Link from "next/link"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


export default function MainSlider({ movies }) {

  const responsiveOptions = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="relative border-2 rounded-lg border-[#fc6736]">
      { !movies?.length ? 
            ( <div
                  className="flex justify-center items-center bg-cover bg-no-repeat bg-center p-4 rounded-lg"
                  style={{ backgroundImage: `url("/logo-white.svg")` }}
                >
                  <div className="loader backdrop-blur-[8px] rounded-lg w-full h-96 z-10"/>
              </div> )
          :
            ( <Carousel
                responsive={responsiveOptions}
                autoPlay
                autoPlaySpeed={3000} // Adjust the speed as needed
                infinite
              >
                { movies.map((movie, index) => (
                  <Link href={`/movie/${movie.id}?${movie.title.toLowerCase().replace(/ /g, "_")}`}>
                    <div
                      key={index}
                      className="flex justify-center items-center relative bg-cover bg-no-repeat bg-center p-4 rounded-lg"
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                      }}
                    >
                      <div className="absolute inset-0 backdrop-blur-[8px] rounded-lg"/>
                      <img
                        className="rounded-xl w-3/6 md:w-4/12 md:h-80 lg:w-3/12 lg:h-96 z-10"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt=""
                      />
                    </div>
                  </Link>
                ))}
              </Carousel> )
          }
    </div>
  )
}
