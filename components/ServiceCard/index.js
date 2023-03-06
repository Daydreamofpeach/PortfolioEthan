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
      className={`w-full  opacity-20    hover:opacity-100  font-bold p-8 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark"
          ? " hover:    hover:text-white"
          : "hover:text-black  "
      } hover:scale-120  `}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-80 text-xl ">
        {description ? description : "Projects "}
      </p>
    </div>
  );
};

export default ServiceCard;
