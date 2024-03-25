import React from "react"

export default function NavButtons({ pageId, handlePrevPage, handleNextPage }) {
  return (
    <div
      style={{ backgroundColor: "rgb(252, 103, 54)" }}
      className="flex flex-row justify-around m-1 p-1 px-8 rounded-xl"
    >
      <button
        style={{ color: "white" }}
        className="mx-1 font-bold"
        onClick={handlePrevPage}
      >
        Pervious
      </button>
      <h1
        style={{ color: "white" }}
        className="m-2 mx-10 font-bold bg-slate-300 rounded-full px-3"
      >
        {" "}
        {pageId}{" "}
      </h1>
      <button
        style={{ color: "white" }}
        className="m-2 font-bold pr-1"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  )
}
