import React from "react";
import Users from "./Users";

const page = () => {
  return (
    <div className="bg-indigo-800 min-h-screen text-white text-center py-10 ">
      <p className="text-cyan-500 underline"> {process.env.NEXT_PUBLIC_VERSION}</p>
      <Users />
    </div>
  );
};

export default page;
