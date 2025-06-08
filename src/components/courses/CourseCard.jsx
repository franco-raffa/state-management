import React, { useState } from "react";

const CourseCard = ({ title, description, rating, price }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-center mb-3">
        <span className="text-yellow-400 mr-2">
          {"★".repeat(Math.floor(rating))}
          {"☆".repeat(5 - Math.floor(rating))}
        </span>
        <span className="text-sm opacity-80">({rating})</span>
      </div>

      <p className={`opacity-80 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
        {description}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-yellow-400 text-sm mb-4 hover:underline"
      >
        {isExpanded ? "Ver menos" : "Ver más"}
      </button>

      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-green-400">${price}</span>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold">
          Inscribirse
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
