import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
}
