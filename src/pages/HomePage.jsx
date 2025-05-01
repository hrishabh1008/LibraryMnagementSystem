import React, { use, useState } from 'react'
import NavBar from '../components/NavBar'
import booksData from '../utils/booksData.json'
import BookCard from '../components/BookCard'
import FilterButton from '../components/FilterButton'




const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState(booksData)
  

  const langSet = new Set();

  books.map(book => {
  langSet.add(book.language)
})



  function handleSearch() {
    const searchInput = document.getElementById("searchBar").value;
    setSearchText(searchInput);
    console.log(books);
    const filteredBooks = books.filter(book => book.title.toUpperCase().includes(searchText.toUpperCase()));
    setBooks(filteredBooks)
   
  }

  

  return (
    <>
      <div className="grid grid-cols-6 gap-1">
        <NavBar></NavBar>
        <div className=" col-span-6 m-4 p-2 text-center">
          <input
            className="bg-white border-2 m-2 rounded-md w-lg text-center"
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search for a Book"
            onChange={handleSearch}
          />
          <button
            className="m-2 bg-blue-200 border-1 rounded-md"
            onClick={handleSearch}
            name="searchBar">
            Search
          </button>
        </div>

        <aside className="bg-[#D9CBA0] rounded-2xl p-2">
          <span className="font-bold">Filters: </span> <br />
          {Array.from(langSet).map(lang => (<FilterButton key={lang} language={lang}></FilterButton>))}
        </aside>

        <main className="bg-amber-100 col-span-5 flex gap-2 flex-wrap justify-evenly overflow-hidden">
          {books.map((book, index) => (
            <>
              <BookCard key={index} book={book}></BookCard>
            </>
          ))}
        </main>
      </div>
    </>
  );
}

export default HomePage