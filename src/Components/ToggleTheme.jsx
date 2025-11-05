import React, { useEffect } from "react";
import { assets } from "../assets/asset";

const ToggleTheme = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            className="size-8.5 p-1.5 border-2 border-gray-500 rounded-full"
            alt=""
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            className="size-8.5 p-1.5 border-2 bg-white border-gray-500 rounded-full"
            alt=""
          />
        )}
      </button>
    </div>
  );
};

export default ToggleTheme;
