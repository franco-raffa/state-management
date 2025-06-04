import React, { useState } from "react";

const CourseCard = ({ title, description, initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="opacity-80 mb-4">{description}</p>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            isLiked
              ? "bg-red-500 text-white"
              : "bg-gray-500 text-white hover:bg-red-500"
          }`}
        >
          <span>{isLiked ? "❤️" : "🤍"}</span>
          <span>{likes} likes</span>
        </button>
      </div>

      <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg w-full font-semibold">
        Ver Detalles
      </button>
    </div>
  );
};

export default CourseCard;
