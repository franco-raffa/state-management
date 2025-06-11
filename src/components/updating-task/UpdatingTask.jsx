import { useState } from "react";

const UpdatingTask = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender React", completed: false, priority: "high" },
    {
      id: 2,
      text: "Estudiar JavaScript",
      completed: false,
      priority: "medium",
    },
    { id: 3, text: "Practicar CSS", completed: false, priority: "low" },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (!newTaskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
      priority: "medium",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setNewTaskText("");
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTaskPriority = (taskId, newPriority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, priority: newPriority } // ✅ Nuevo objeto
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🔄 Agregar tareas
        </h1>

        <div className="grid lg:grid-cols-1 gap-8">
          {/* Panel de Tareas */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              📝 Lista de Tareas
            </h2>

            {/* Agregar nueva tarea */}
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Nueva tarea..."
                className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onKeyDown={(e) => e.key === "Enter" && addTask()}
              />
              <button
                onClick={addTask}
                className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform"
              >
                ➕ Agregar
              </button>
            </div>

            {/* Lista de tareas */}
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        className="w-5 h-5"
                      />
                      <span
                        className={`text-white ${
                          task.completed ? "line-through opacity-60" : ""
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-400 hover:text-red-300 font-bold text-lg"
                    >
                      🗑️
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-300">Prioridad:</span>
                    <select
                      value={task.priority}
                      onChange={(e) =>
                        updateTaskPriority(task.id, e.target.value)
                      }
                      className="bg-white/20 text-white text-sm rounded px-2 py-1 border border-white/30"
                    >
                      <option value="low" className="text-black">
                        Baja
                      </option>
                      <option value="medium" className="text-black">
                        Media
                      </option>
                      <option value="high" className="text-black">
                        Alta
                      </option>
                    </select>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        task.priority === "high"
                          ? "bg-red-500"
                          : task.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {task.priority === "high"
                        ? "🔴"
                        : task.priority === "medium"
                        ? "🟡"
                        : "🟢"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatingTask;
