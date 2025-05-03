import React, { useState } from "react";
import NavBar from "../components/NavBar";
import booksData from "../utils/booksData.json";
import BookCard from "../components/BookCard";
import FilterButton from "../components/FilterButton";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState(booksData);

  const langSet = new Set();

  books.map((book) => {
    langSet.add(book.language);
  });

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()) ||
      book.language.toLowerCase().includes(searchText.toLowerCase());
    return matchesSearch;
  });

  // function handleSearch() {
  //   const filteredBooks = books.filter(
  //     (book) =>
  //       book.title.toUpperCase().includes(searchText.toUpperCase()) ||
  //       book.author.toUpperCase().includes(searchText.toUpperCase()) ||
  //       book.language.toUpperCase().includes(searchText.toUpperCase())
  //   );
  //   setBooks(filteredBooks);
  // }

  function handleFilterBtn() {
    console.log(searchText);
    const filterdBtnBooks = books.filter((book) =>
      book.language.toUpperCase().includes(searchText)
    );
    setBooks(filterdBtnBooks);
  }

  return (
    <>
      <div className="grid grid-cols-6 gap-1">
        {/* <NavBar></NavBar> */}
        <div className=" col-span-6 m-4 p-2 text-center">
          <input
            className="bg-amber-50 m-2  text-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="searchBar"
            id="searchBar"
            value={searchText}
            placeholder="Search for a Book"
            onChange={(e) => {
              setSearchText(e.target.value);
              // handleSearch();
            }}
          />
          {/* <button
            className="m-2 bg-blue-200 border-1 rounded-md"
            onClick={handleSearch}
            name="searchBar">
            Search
          </button> */}
        </div>

        <aside className="bg-[#D9CBA0] rounded-2xl p-2">
          <span className="font-bold">Filters: </span> <br />
          {Array.from(langSet).map((lang) => (
            <FilterButton
              key={lang}
              language={lang}
              handleFilterBtn={(e) => {
                // console.log(e);
                const innerText = e.target.innerText.toUpperCase();
                setSearchText(innerText);
                handleFilterBtn();
              }}></FilterButton>
          ))}
        </aside>

        <main className="bg-amber-100 col-span-5 flex gap-2 flex-wrap justify-evenly overflow-hidden">
          {filteredBooks.map((book) => (
            <BookCard
              key={`${book.title}-${book.language}`}
              book={book}></BookCard>
          ))}
        </main>
      </div>
    </>
  );
};

export default HomePage;
