import React, { useState } from "react";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    course: "react",
    experience: "beginner",
    newsletter: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.name}! Tu mensaje ha sido enviado.`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contáctanos</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input de texto - Two-way binding básico */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name} // ✅ Valor del estado
              onChange={handleInputChange} // ✅ Actualiza el estado
              placeholder="Tu nombre completo"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Caracteres: {formData.name.length}
            </p>
          </div>

          {/* Email input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="tu@email.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Select dropdown - Two-way binding */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Curso de interés
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="react">React Avanzado</option>
              <option value="nodejs">Node.js Backend</option>
              <option value="python">Python IA</option>
              <option value="fullstack">Full Stack</option>
            </select>
          </div>

          {/* Radio buttons - Two-way binding */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nivel de experiencia
            </label>
            <div className="space-y-2">
              {[
                { value: "beginner", label: "Principiante" },
                { value: "intermediate", label: "Intermedio" },
                { value: "advanced", label: "Avanzado" },
              ].map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="experience"
                    value={option.value}
                    checked={formData.experience === option.value}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Cuéntanos sobre tus objetivos..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              Caracteres: {formData.message.length}/500
            </p>
          </div>

          {/* Checkbox - Two-way binding */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-700">
              Quiero recibir noticias y ofertas especiales
            </label>
          </div>

          {/* Preview de los datos (para demostrar two-way binding) */}
          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h4 className="font-semibold text-gray-700 mb-2">
              Vista previa (Two-way binding en acción):
            </h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>Nombre:</strong> {formData.name || "Sin especificar"}
              </p>
              <p>
                <strong>Email:</strong> {formData.email || "Sin especificar"}
              </p>
              <p>
                <strong>Curso:</strong> {formData.course}
              </p>
              <p>
                <strong>Experiencia:</strong> {formData.experience}
              </p>
              <p>
                <strong>Newsletter:</strong> {formData.newsletter ? "Sí" : "No"}
              </p>
              <p>
                <strong>Mensaje:</strong> {formData.message || "Sin mensaje"}
              </p>
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
