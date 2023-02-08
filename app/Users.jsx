import Link from "next/link";
import React from "react";

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
const Users = async () => {
  const data = await fetchUsers();
  console.log(data);
  return (
    <div>
      {data.map((user) => {
        return (
          <div key={user.id} className="flex items-center mx-32 gap-x-4 py-2">
            <p>{user.name}</p>
            <Link
              href={`/people/${user.id}`}
              className="bg-teal-700 px-4 py-1.5 rounded-sm hover:bg-indigo-600"
            >
              View
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
