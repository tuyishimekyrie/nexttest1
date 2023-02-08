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
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
