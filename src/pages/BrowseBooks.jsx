import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import booksData from '../utils/booksData.json'


const BrowseBooks = () => {
  const { language } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = booksData.filter((book) => {
    const matchesLanguage = language ? book.language === language : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.language.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLanguage && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#e3d4b9] p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Browse Books
      </h1>
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by title, author or language "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border bg-amber-50 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <li
            key={`${book.title}--${book.language}`}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">
              {book.title}
            </h3>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Language {book.language}</p>
            <Link
              to={`/details/${book.title}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;