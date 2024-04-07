import React from 'react'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the faChevronRight icon from Font Awesome's free-solid-svg-icons
import { faChevronCircleLeft, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";
import EmptyCardLoader from './EmptyCardLoader';


export default function HomeCardLoader({}) {
  return (
    <div className="flex flex-row items-center">
      <FontAwesomeIcon icon={faChevronCircleLeft} className="bg-white text-[#fc6736] text-3xl rounded-full hover:cursor-pointer"/>
      <div><EmptyCardLoader /></div>
      <FontAwesomeIcon icon={faChevronCircleRight} className="bg-white text-[#fc6736] text-3xl rounded-full hover:cursor-pointer"/>
    </div>
  )
}
