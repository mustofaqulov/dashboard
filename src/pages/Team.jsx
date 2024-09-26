import { useEffect, useState } from "react";
import { getUsers } from "../services/Users";
import { UserCard } from "../components/UserCard/UserCard";
import { UserCardSceleton } from "../components/Sceletons/UserCard/UserCardSceleton";

export const Team = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <div className="p-7 grow bg-gray-600 ml-[18.9%]">
      <h1 className="text-4xl text-white font-bold mb-10 text-center">Users</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-[20px] gap-y-[50px]">
          {users.length > 0 ? (
            users.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <>
              <UserCardSceleton />
              <UserCardSceleton />
              <UserCardSceleton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
