import React from 'react'

export default function EmptyCardLoader() {
  return (
    <div className="mx-2 mr-3 flex flex-row w-64 overflow-x-auto md:w-[580px] lg:w-full">
      {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-52 md:w-52 mx-2 my-4 bg-gray-300 rounded-lg shadow-md flex justify-center border-2 border-solid "
                style={{ 
                    backgroundImage: `url("/logo-white.svg")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderColor: "rgb(252, 103, 54)"
                }}
          >
            <div style={{ backdropFilter: "blur(3px)" }} className="loader rounded-lg w-40 h-60 md:h-72 md:w-96"/>
          </div>
          ))
        }
    </div>
  )
}
