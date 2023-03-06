import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className=" overflow-hidden rounded-lg p-2  first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden   transition-all ease-out duration-300   h-auto   mob:h-auto"
        style={{ height: "auto"
        
       }}
      >
        <img
          alt={name}
          className="    w-full   h-full scale-75 shadow-2xl    hover:scale-100 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium  text-center">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50 text-center">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
