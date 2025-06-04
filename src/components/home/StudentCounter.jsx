import React, { useState } from "react";

const StudentCounter = () => {
  const [studentCount, setStudentCount] = useState(127);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto mb-8">
      <h3 className="text-2xl mb-4">¡Ya somos una gran familia!</h3>
      <div className="text-4xl font-bold text-yellow-300 mb-4">
        {studentCount}+ estudiantes
      </div>
      <button
        onClick={() => setStudentCount((prev) => prev + 1)}
        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
      >
        ¡Únete ahora!
      </button>
    </div>
  );
};

export default StudentCounter;
