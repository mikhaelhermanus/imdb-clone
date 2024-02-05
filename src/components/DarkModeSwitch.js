import React, { Fragment, useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(()=>setMounted(true),[])
  return (
    <Fragment>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("dark")} />
      )}
    </Fragment>
  );
};

export default DarkModeSwitch;
