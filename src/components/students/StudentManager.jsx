import React, { useState } from "react";

// Componente para manejar lista de estudiantes por curso (multi-dimensional)
const StudentManager = () => {
  // Array multidimensional: cada curso tiene un array de estudiantes
  const [courseStudents, setCourseStudents] = useState([
    {
      courseId: 1,
      courseName: "React Avanzado",
      students: [
        { id: 1, name: "Ana García", progress: 85, assignments: [95, 88, 92] },
        {
          id: 2,
          name: "Carlos López",
          progress: 72,
          assignments: [78, 85, 90],
        },
        {
          id: 3,
          name: "María Rodríguez",
          progress: 91,
          assignments: [96, 89, 94],
        },
      ],
    },
    {
      courseId: 2,
      courseName: "Node.js Backend",
      students: [
        { id: 4, name: "Juan Pérez", progress: 68, assignments: [75, 82, 70] },
        {
          id: 5,
          name: "Sofía Martín",
          progress: 89,
          assignments: [92, 87, 95],
        },
      ],
    },
    {
      courseId: 3,
      courseName: "Python IA",
      students: [
        {
          id: 6,
          name: "Diego Torres",
          progress: 76,
          assignments: [80, 85, 78],
        },
        { id: 7, name: "Laura Vega", progress: 94, assignments: [98, 91, 96] },
        {
          id: 8,
          name: "Roberto Silva",
          progress: 82,
          assignments: [88, 79, 85],
        },
      ],
    },
  ]);

  const [newStudentForm, setNewStudentForm] = useState({
    courseId: 1,
    name: "",
    initialProgress: 0,
  });

  // Agregar nuevo estudiante a un curso específico
  const addStudentToCourse = () => {
    if (!newStudentForm.name.trim()) return;

    setCourseStudents((prevCourses) =>
      prevCourses.map((course) => {
        if (course.courseId === newStudentForm.courseId) {
          const newStudent = {
            id: Date.now(), // ID temporal
            name: newStudentForm.name,
            progress: newStudentForm.initialProgress,
            assignments: [],
          };
          return {
            ...course,
            students: [...course.students, newStudent],
          };
        }
        return course;
      })
    );

    // Resetear formulario
    setNewStudentForm({
      courseId: 1,
      name: "",
      initialProgress: 0,
    });
  };

  // Agregar calificación a un estudiante específico
  const addAssignmentGrade = (courseId, studentId, grade) => {
    setCourseStudents((prevCourses) =>
      prevCourses.map((course) => {
        if (course.courseId === courseId) {
          return {
            ...course,
            students: course.students.map((student) => {
              if (student.id === studentId) {
                return {
                  ...student,
                  assignments: [...student.assignments, grade],
                };
              }
              return student;
            }),
          };
        }
        return course;
      })
    );
  };

  // Eliminar estudiante de un curso
  const removeStudentFromCourse = (courseId, studentId) => {
    setCourseStudents((prevCourses) =>
      prevCourses.map((course) => {
        if (course.courseId === courseId) {
          return {
            ...course,
            students: course.students.filter(
              (student) => student.id !== studentId
            ),
          };
        }
        return course;
      })
    );
  };

  // Calcular promedio de calificaciones
  const calculateAverage = (assignments) => {
    if (assignments.length === 0) return 0;
    return Math.round(
      assignments.reduce((sum, grade) => sum + grade, 0) / assignments.length
    );
  };

  return (
    <div className="text-white">
      <h2 className="text-4xl font-bold text-center mb-8">
        Gestión de Estudiantes
      </h2>

      {/* Formulario para agregar estudiante */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Agregar Nuevo Estudiante</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <select
            value={newStudentForm.courseId}
            onChange={(e) =>
              setNewStudentForm((prev) => ({
                ...prev,
                courseId: parseInt(e.target.value),
              }))
            }
            className="p-3 rounded-lg bg-white/20 text-white border border-white/30"
          >
            {courseStudents.map((course) => (
              <option
                key={course.courseId}
                value={course.courseId}
                className="text-black"
              >
                {course.courseName}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={newStudentForm.name}
            onChange={(e) =>
              setNewStudentForm((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            placeholder="Nombre del estudiante"
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30"
          />

          <button
            onClick={addStudentToCourse}
            className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Agregar
          </button>
        </div>
      </div>

      {/* Lista de cursos y estudiantes (multi-dimensional rendering) */}
      <div className="space-y-8">
        {courseStudents.map((course) => (
          <div
            key={course.courseId}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{course.courseName}</h3>
              <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                {course.students.length} estudiantes
              </span>
            </div>

            {/* Grid de estudiantes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.students.map((student) => (
                <div key={student.id} className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">{student.name}</h4>
                    <button
                      onClick={() =>
                        removeStudentFromCourse(course.courseId, student.id)
                      }
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Progreso:</span>
                      <span className="font-semibold">{student.progress}%</span>
                    </div>

                    <div>
                      <span>Tareas: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {student.assignments.map((grade, index) => (
                          <span
                            key={index}
                            className="bg-blue-500 px-2 py-1 rounded text-xs"
                          >
                            {grade}
                          </span>
                        ))}
                        {student.assignments.length === 0 && (
                          <span className="text-gray-400 text-xs">
                            Sin tareas
                          </span>
                        )}
                      </div>
                    </div>

                    {student.assignments.length > 0 && (
                      <div className="flex justify-between">
                        <span>Promedio:</span>
                        <span className="font-semibold text-green-400">
                          {calculateAverage(student.assignments)}
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        const grade = prompt(
                          "Ingresa la calificación (0-100):"
                        );
                        if (
                          grade &&
                          !isNaN(grade) &&
                          grade >= 0 &&
                          grade <= 100
                        ) {
                          addAssignmentGrade(
                            course.courseId,
                            student.id,
                            parseInt(grade)
                          );
                        }
                      }}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded text-xs font-semibold hover:scale-105 transition-transform"
                    >
                      + Agregar Tarea
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {course.students.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No hay estudiantes en este curso
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentManager;
