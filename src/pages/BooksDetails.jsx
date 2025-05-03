import React from 'react';
import { Link, useParams } from 'react-router-dom';
import booksData from "../utils/booksData.json";

const BooksDetails = () => {
    const { bookId } = useParams(); 

    const filteredId = booksData.filter((book) => book.title === bookId);

    return (
      <div className="min-h-screen bg-[#e3d4b9] flex flex-col items-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
          <img
            src={`../../public/${filteredId[0].imageLink}`}
            alt="cover"
            className="w-full h-64 object-contain rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {filteredId[0].title}
          </h1>
          <p className="text-gray-700 mb-2">
            <strong className="font-semibold">Author:</strong>{" "}
            {filteredId[0].author}
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="font-semibold">Description:</strong>{" "}
            {filteredId[0].description}
          </p>
          <p className="text-gray-700 mb-6">
            <strong className="font-semibold">Rating:</strong>{" "}
            {Math.floor(Math.random() * 10)}
          </p>
          <Link to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Back to Browse
            </button>
          </Link>
        </div>
      </div>
    );
};

export default BooksDetails;