import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs"
const MenuItem = ({ title, address, icon }) => {
  const renderIcon = () => {
    if (icon === "home") {
      return <AiFillHome className="text-2xl sm:hidden mx-4" />;
    } else if (icon === "info") {
      return <BsFillInfoCircleFill className="text-2xl sm:hidden mx-4" />;
    }
  };
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        {renderIcon()}
        <h1 className="hidden sm:inline my-2 text-sm">{title}</h1> 
      </Link>
    </div>
  );
};

export default MenuItem;
