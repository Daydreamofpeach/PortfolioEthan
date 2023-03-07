import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    
    <div
      className=" overflow-hidden rounded-lg p-2  first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden   ease-out duration-1s   h-auto   mob:h-auto"
        style={{ height: "auto" }}
      >
        <img
          alt={name}
          className="    w-full    h-full scale-90 shadow-2xl  hover:opacity-90   "
          src={img}
        ></img>

        </div>
      <h1 className="mt-5 text-3xl font-medium    font-black  opacity-100     text-center">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50 text-center">
        {description ? description : "Description"}
      </h2>
      
    </div>
  );
};

export default WorkCard;
