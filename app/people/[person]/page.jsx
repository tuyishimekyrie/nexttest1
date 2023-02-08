import React from "react";
import Link from "next/link";

async function fetchPerson(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{next: {revalidate: 10}});
  const data = await res.json();
  return data;
}
const page = async (params) => {
  const param = params;
  const id = param?.params.person;
  const people = await fetchPerson(id);
  // console.log(people);
  return (
    <div className="bg-indigo-800 min-h-screen text-white text-center py-10 divide-y-2 ">
      <Link href="/" className="bg-teal-700 px-4 py-1.5 rounded-sm ">
        Back
      </Link>

      <div className="py-4  ">
        <p>{people?.name}</p>
        <p>{people.username}</p>
        <p>{people.email}</p>
        <p>{people.phone}</p>
        <p>{people.website}</p>
        <p>Company : {people.company.name}</p>
      </div>
    </div>
  );
};

export default page;
