import React, { useState } from "react";

const CourseSearch = ({ courses, onFilteredCourses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  // Efecto para filtrar cursos basado en búsqueda
  React.useEffect(() => {
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        course.rating >= minRating
    );
    onFilteredCourses(filtered);
  }, [searchTerm, minRating, courses, onFilteredCourses]);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Buscar Cursos</h3>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Búsqueda por texto */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Buscar por nombre
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Escribe para buscar..."
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <p className="text-xs text-gray-300 mt-1">Buscando: "{searchTerm}"</p>
        </div>

        {/* Filtro por rating */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Rating mínimo: {minRating} estrellas
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={minRating}
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-300 mt-1">
            <span>0★</span>
            <span>5★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
