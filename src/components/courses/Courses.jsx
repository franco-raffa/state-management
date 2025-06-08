import React, { useState } from "react";
import CourseCard from "./CourseCard";
import CourseSearch from "./CourseSearch";

const Courses = () => {
  const [allCourses] = useState([
    {
      id: 1,
      title: "React Avanzado",
      description:
        "Domina React desde cero hasta nivel profesional. Aprende hooks, context, testing, y las mejores prácticas para desarrollo frontend moderno.",
      rating: 4.8,
      price: 299,
    },
    {
      id: 2,
      title: "Node.js Backend",
      description:
        "Construye APIs robustas y escalables con Node.js, Express, MongoDB y las mejores prácticas de backend development.",
      rating: 4.6,
      price: 349,
    },
    {
      id: 3,
      title: "Python IA",
      description:
        "Sumérgete en el mundo de la Inteligencia Artificial con Python, TensorFlow, scikit-learn y técnicas de machine learning.",
      rating: 4.9,
      price: 399,
    },
    {
      id: 4,
      title: "Full Stack JavaScript",
      description:
        "Conviértete en desarrollador full stack dominando tanto frontend como backend con el stack MERN.",
      rating: 4.7,
      price: 499,
    },
  ]);

  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  return (
    <div className="text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Nuestros Cursos</h2>

      <CourseSearch
        courses={allCourses}
        onFilteredCourses={setFilteredCourses}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl opacity-70">
            No se encontraron cursos con esos criterios
          </p>
        </div>
      )}
    </div>
  );
};

export default Courses;
