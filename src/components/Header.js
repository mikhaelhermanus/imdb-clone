import Link from "next/link";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" icon="home" />
        <MenuItem title="ABOUT" address="/about" icon="info" />
      </div>
      <div className="flex items-center space-x-5">
       <DarkModeSwitch/>
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 rounded-lg mr-1 p-2">IMDb</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
