import React from "react";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "React Avanzado",
    description: "Domina React desde cero hasta nivel profesional.",
  },
  {
    title: "Node.js Backend",
    description: "Domina Node.js desde cero hasta nivel profesional.",
  },
  {
    title: "Python IA",
    description: "Domina Python IA desde cero hasta nivel profesional.",
  },
];

const Courses = () => {
  return (
    <div className="text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Nuestros Cursos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
