import React, { useState } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [courses] = useState([
    {
      id: 1,
      title: "React Avanzado",
      description: "Domina React desde cero hasta nivel profesional.",
      initialLikes: 15,
    },
    {
      id: 2,
      title: "Node.js Backend",
      description: "Domina Node.js desde cero hasta nivel profesional.",
      initialLikes: 23,
    },
    {
      id: 3,
      title: "Python IA",
      description: "Domina Python IA desde cero hasta nivel profesional.",
      initialLikes: 31,
    },
  ]);

  return (
    <div className="text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Nuestros Cursos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            initialLikes={course.initialLikes}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
