import React from "react";

const SideBar = () => {
  return (
    <div className="p-5 shadow-lg w-48">
      <ul className=" border-b-4">
        <li className="py-2">Home</li>
        <li className="py-2">Shorts</li>
        <li className="py-2">Subscriptions</li>
      </ul>
      <ul className=" border-b-4">
        <li className="py-2">Library</li>
        <li className="py-2">History</li>
        <li className="py-2">Watch later</li>
        <li className="py-2">Liked videos</li>
      </ul>
      <h1 className="py-2 font-bold">Explore</h1>
      <ul className="border-b-4">
        <li className="py-2">Trending</li>
        <li className="py-2">Shopping</li>
        <li className="py-2">Music</li>
        <li className="py-2">Movies</li>
        <li className="py-2">Live</li>
        <li className="py-2">Gaming</li>
        <li className="py-2">Music</li>
        <li className="py-2">Sports</li>
        <li className="py-2">Learning</li>
        <li className="py-2">Fashion & Beauty</li>
      </ul>
    </div>
  );
};

export default SideBar;
