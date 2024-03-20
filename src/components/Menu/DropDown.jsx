"use client"
import React, { useState } from 'react';

export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState('Movies');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        name="filter"
        id="filter"
        className="w-full px-2 py-1"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="Movies">Movies</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
    </div>
  );
}