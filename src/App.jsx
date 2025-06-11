import "./App.css";
import { useState } from "react";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Courses from "./components/courses/Courses";
import About from "./components/about/About";
import ContactForm from "./components/shared/ContactForm";
import StudentManager from "./components/students/StudentManager";
import UpdatingTask from "./components/updating-task/UpdatingTask";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showContactForm, setShowContactForm] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleToggleContact = () => {
    setShowContactForm((prevShow) => !prevShow);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700">
      <Header
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main className="container mx-auto px-6 py-12">
        {activeSection === "home" && (
          <Home onToggleContact={handleToggleContact} />
        )}

        {activeSection === "students" && <StudentManager />}

        {activeSection === "courses" && <Courses />}

        {activeSection === "about" && <About />}

        {activeSection === "updating-task" && <UpdatingTask />}

        {showContactForm && <ContactForm onClose={handleToggleContact} />}
      </main>
    </div>
  );
}

export default App;
