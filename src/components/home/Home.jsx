import StudentCounter from "./StudentCounter";

const Home = ({ onToggleContact }) => {
  return (
    <div className="text-center text-white">
      <h2 className="text-5xl font-bold mb-6">
        Aprende Programación
        <span className="block text-yellow-300">a tu Ritmo</span>
      </h2>

      <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
        Únete a nuestra comunidad de desarrolladores y domina las tecnologías
        más demandadas del mercado.
      </p>

      <StudentCounter />

      <button
        onClick={onToggleContact}
        className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
      >
        Contáctanos
      </button>
    </div>
  );
};

export default Home;
