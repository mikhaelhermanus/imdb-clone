import React from "react";
import NavBarItem from "./NavBarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-amber-100 lg:text-lg p-4">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
