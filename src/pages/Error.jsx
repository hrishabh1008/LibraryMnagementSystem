import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e3d4b9]">
      <div className="text-center p-8 bg-[white] rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">
          {error.status || "404"}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {error.statusText || "Oops! Something went wrong"}
        </h2>
        <p className="text-gray-600 mb-6">
          {error.message || `The page you're looking for doesn't exist.`}
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;