import React from "react";

export const UserCardSceleton = () => {
  return (
    <div className="w-full max-w-[300px] rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-gradient-to-r from-gray-300 to-gray-200 h-32 w-32 border-4 border-indigo-400"></div>
      </div>

      <div className="text-center">
        <div className="h-6 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-3/4 mx-auto mb-2"></div>
        <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-1/2 mx-auto mb-2"></div>
        <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-1/3 mx-auto"></div>
      </div>

      <div className="mt-6">
        <div className="h-5 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-1/3 mb-4"></div>
        <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-full"></div>
      </div>

      <div className="mt-6">
        <div className="h-5 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-1/3 mb-4"></div>
        <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded-md w-full"></div>
      </div>
    </div>
  );
};
