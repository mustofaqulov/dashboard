import React from "react";

export const UserCard = ({ user }) => {
  return (
    <div className="max-w-[360px] rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-center mb-6">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="rounded-full h-32 w-32 object-cover border-4 border-indigo-500"
        />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {user.company.title} at {user.company.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {user.age} years old, {user.gender}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          Contact Information
        </h3>
        <p className="text-gray-600 dark:text-gray-300">Email: {user.email}</p>
        <p className="text-gray-600 dark:text-gray-300">Phone: {user.phone}</p>
        <p className="text-gray-600 dark:text-gray-300">
          Address: {user.address.address}, {user.address.city},{" "}
          {user.address.state} ({user.address.stateCode}),{" "}
          {user.address.postalCode}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          Physical Information
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Height: {user.height} cm | Weight: {user.weight} kg
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Eye Color: {user.eyeColor}, Hair: {user.hair.color} ({user.hair.type})
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Blood Group: {user.bloodGroup}
        </p>
      </div>
    </div>
  );
};
