import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full  font-bold p-8 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark"
          ? " hover:bg-gradient-to-tr from-leaf-200 to-gold-200 hover:text-neutral-900"
          : "hover:text-white  hover:bg-gradient-to-tr  from-beach-400 to-amber-300"
      } hover:scale-110 hover:rotate-1 `}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-80 text-xl ">
        {description
          ? description
          : "Projects "}
      </p>
    </div>
  );
};

export default ServiceCard;
