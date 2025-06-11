const Header = ({ activeSection, onSectionChange }) => {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">🎓 Academia Pro</h1>

          <nav className="flex space-x-4">
            {["home", "students", "courses", "updating-task", "about"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => onSectionChange(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section
                      ? "bg-white text-purple-800 font-semibold"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  {section === "home"
                    ? "Inicio"
                    : section === "students"
                    ? "Estudiantes"
                    : section === "courses"
                    ? "Cursos"
                    : section === "updating-task"
                    ? "Actualizar Tareas"
                    : "Nosotros"}
                </button>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
