import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import React from 'react'
import { useDispatch } from "react-redux";
import { setSearchValue } from "../redux/user/searchSlice";

const SearchBar = () => {

  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchValue(e.target.value))
  }

  return (
    <div className="relative w-full md:w-1/3 h-10 rounded-full border border-gray-400">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search Products"
        className="w-full h-full rounded-full pl-4 text-sm font-semibold bg-[#F5F7F9]"
      />
      <AiOutlineSearch className="absolute top-2 right-2  text-2xl text-gray-500" />
    </div>
  );
};

export default SearchBar;
