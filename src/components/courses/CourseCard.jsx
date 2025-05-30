import React from "react";

const CourseCard = ({ title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="opacity-80 mb-4">{description}</p>
      <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg w-full font-semibold">
        Ver Detalles
      </button>
    </div>
  );
};

export default CourseCard;
