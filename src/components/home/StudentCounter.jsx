import React, { useState } from "react";

const StudentCounter = () => {
  const [studentCount, setStudentCount] = useState(127);
  const [customIncrement, setCustomIncrement] = useState("");

  const addCustomAmount = () => {
    const amount = parseInt(customIncrement);
    if (!isNaN(amount) && amount > 0) {
      setStudentCount((prev) => prev + amount);
      setCustomIncrement(""); // Limpiar input
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto mb-8">
      <h3 className="text-2xl mb-4">¡Ya somos una gran familia!</h3>
      <div className="text-4xl font-bold text-yellow-300 mb-6">
        {studentCount}+ estudiantes
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setStudentCount((prev) => prev + 1)}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          ¡Únete ahora! (+1)
        </button>

        {/* Input controlado para incremento personalizado */}
        <div className="flex space-x-2">
          <input
            type="number"
            value={customIncrement}
            onChange={(e) => setCustomIncrement(e.target.value)}
            placeholder="Cantidad"
            className="flex-1 p-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            min="1"
          />
          <button
            onClick={addCustomAmount}
            disabled={!customIncrement || parseInt(customIncrement) <= 0}
            className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCounter;
