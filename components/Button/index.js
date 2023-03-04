import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-xl tablet:text-xl  laptop:p-4 m-1 laptop:m-2  rounded p-2 ${
          theme === "dark" ? " bg-gradient-to-br from-gold-100  to-beach-300   text-slate-800 font-semibold" : "bg-amber-500 text-white"
        }  transition-all duration-300 ease-out first:ml-0 hover:scale-150 active:scale-100 link ${
          data.showCursor && "cursor-none"
        }  ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-xl m-1 p-2 font-bold laptop:p-2  laptop:m-2 rounded-lg flex items-center  transition-all ease-out    duration-300 ${
        theme === "dark"
          ? "hover:bg-gradient-to-bl from-rose-500 to-amber-400 text-white"
          : "hover:bg-purple-500"
      } hover:scale-110  active:scale-100  tablet:first:ml-0  ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
