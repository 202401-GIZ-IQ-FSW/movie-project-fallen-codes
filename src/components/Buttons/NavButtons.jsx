import React from "react"

export default function NavButtons({ pageId, handlePrevPage, handleNextPage }) {
  return (
    <div
      style={{ backgroundColor: "rgb(252, 103, 54)" }}
      className="flex flex-row justify-center m-1 p-1 px-8 rounded-xl"
    >
      <button
        className="mx-1 font-bold text-white hover:text-sky-600"
        onClick={handlePrevPage}
      >
        Pervious
      </button>
      <h1
        className="m-2 mx-10 font-bold text-white bg-slate-300 rounded-full px-3"
      >
        {" "}
        {pageId}{" "}
      </h1>
      <button
        className="m-2 font-bold pr-1 text-white hover:text-sky-600"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  )
}
