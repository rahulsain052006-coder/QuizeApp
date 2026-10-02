import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(search);
    }
  };

  const clearSearch = () => {
    setSearch("");

    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSearch}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto">
      <div className="group relative flex items-center overflow-hidden rounded-2xl border-2 border-yellow-400 bg-black shadow-[0_0_25px_rgba(250,204,21,0.15)] transition-all duration-300 focus-within:shadow-[0_0_35px_rgba(250,204,21,0.3)]">
        <div className="pl-4 text-yellow-400 sm:pl-5">
          <FiSearch className="text-xl sm:text-2xl" />
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search React, JavaScript, GK..."
          className="w-full bg-transparent px-3 py-4 text-sm text-white outline-none placeholder:text-gray-500 sm:px-4 sm:py-5 sm:text-base"/>

        {search && (
          <button
            type="button"
            onClick={clearSearch}
            className="mr-2 rounded-full p-2 text-gray-400 transition hover:bg-yellow-400 hover:text-black">
            <FiX className="text-lg" />
          </button>)}

        <button
          type="submit"
          className="mr-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:bg-yellow-300 hover:scale-105 active:scale-95 sm:mr-3 sm:px-6 sm:py-3">
          Search
        </button>
      </div>
    </motion.form>
  );
};

export default SearchBar;
