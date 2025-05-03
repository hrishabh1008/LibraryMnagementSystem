import React from 'react'
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  return (
    <>
      <div className="border-2 rounded-lg bg-[#A67C4D] w-70 hover:scale-102">
        <img className="h-2/3 w-full" src={book.imageLink} alt="cover" />
        <h2 className="font-bold text-2xl">{book.title}</h2>
        <p className="overflow-hidden">
          <span className="font-bold">Author: {book.author} </span>
          <br />
          <span>Language: {book.language}</span>
          <br />
          <span>Country of Origin: {book.country}</span>
          <br />
          <span>Pages: {book.pages}</span>
          <br />

          <a href={book.link} className="text-blue-600 hover:text-blue-900">
            {book.link}
          </a>
        </p>
        <Link
          to={`/details/${book.title}`}
          className="inline-block mt-4 px-4 py-2 bg-[#D9CBA0] text-black rounded-lg shadow hover:bg-blue-600 transition-colors">
          View Details
        </Link>
      </div>
    </>
  );
};

export default BookCard