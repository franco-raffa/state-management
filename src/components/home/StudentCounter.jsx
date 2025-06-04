import React, { useState } from "react";

const StudentCounter = () => {
  const [studentCount, setStudentCount] = useState(127);
  const [clickCount, setClickCount] = useState(0);

  const incrementsStudents = () => {
    setStudentCount((prev) => prev + 1);
    setClickCount((prev) => prev + 1);
  };

  const addMultipleStudents = () => {
    setStudentCount((prev) => prev + 5);
    setStudentCount((prev) => prev + 3);
    setClickCount((prev) => prev + 10);
  };

  const incorrectUpdate = () => {
    setStudentCount(studentCount + 1);
    setStudentCount(studentCount + 1);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto mb-8">
      <h3 className="text-2xl mb-4">¡Ya somos una gran familia!</h3>
      <div className="text-4xl font-bold text-yellow-300 mb-4">
        {studentCount}+ estudiantes
      </div>
      <div className="text-sm text-gray-200 mb-4">
        Botón presionado: {clickCount} veces
      </div>
      <div className="space-y-2">
        {/* IncrementStudents */}
        <button
          onClick={incrementsStudents}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          ¡Únete ahora! (+1)
        </button>
        {/* AddMultipleStudents */}
        <button
          onClick={addMultipleStudents}
          className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          Registro grupal (+8)
        </button>
        {/* IncorrectUpdate */}
        <button
          onClick={incorrectUpdate}
          className="w-full bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          ❌ Método incorrecto (+1?)
        </button>
      </div>
    </div>
  );
};

export default StudentCounter;
