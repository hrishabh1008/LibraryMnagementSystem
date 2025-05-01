import React from 'react'

const BookCard = ({ book }) => {
 
  return (
    <>
      <div className="border-2 rounded-lg bg-[#A67C4D] w-70">
        <img className='h-2/3 w-full' src={book.imageLink} alt="cover" />
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
          <a href={book.link} className="text-blue-700">
          {book.link}
          </a>
        </p>
      </div>
    </>
  );
}

export default BookCard