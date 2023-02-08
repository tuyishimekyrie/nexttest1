import React from "react";
import Users from "./Users";

const page = () => {
  return (
    <div className="bg-indigo-800 min-h-screen text-white text-center py-40 ">
      <p className="text-5xl">Next js {process.env.NEXT_PUBLIC_VERSION}</p>
      <Users />
    </div>
  );
};

export default page;
