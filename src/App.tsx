import React, { useState } from "react";
import "./App.css";
import InputField from "./UI/Atoms/InputField";
import Button from "./UI/Atoms/Button";
import { EnumTaskStatus } from "./constants/enumTaskStatus";
import TaskItem from "./UI/Molecules/TaskItem";
import { useTasks } from "./hooks/useTask/useTasks";

function App() {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const {
    tasks,
    filter,
    setFilter,
    statusFilter,
    setStatusFilter,
    dateFilter,
    setDateFilter,
    addTask,
    deleteTask,
    toggleTaskDone,
  } = useTasks();

  const handleAddTask = () => {
    addTask(task, dueDate);
    setTask("");
    setDueDate("");
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = task.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesStatus =
      statusFilter === EnumTaskStatus.ALL || task.status === statusFilter;
    const matchesDate =
      !dateFilter || new Date(task.dueDate) >= new Date(dateFilter);
    return matchesFilter && matchesStatus && matchesDate;
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-row md:flex-row items-center gap-4 mb-4 justify-center">
          <InputField
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Agrega tu tarea aquí..."
          />
          <InputField
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <Button title={"Agregar"} onPress={handleAddTask} />
        </div>
        <div className="flex flex-row md:flex-row items-center gap-4 mb-4 justify-center">
          <InputField
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filtrar tareas..."
          />
          <InputField
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            placeholder="Filtrar desde fecha..."
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as EnumTaskStatus)}
            className="p-2 border-solid border-2 border-blue-300 rounded-lg"
          >
            <option value={EnumTaskStatus.ALL}>Todos</option>
            <option value={EnumTaskStatus.PENDING}>Pendiente</option>
            <option value={EnumTaskStatus.CLOSED}>Cerrado</option>
          </select>
        </div>
        <h2 className="text-lg text-center font-bold text-blue-600 mb-4">
          Listado de Tareas
        </h2>
        {filteredTasks.length > 0 ? (
          <ul className="space-y-2 max-h-96 overflow-y-auto">
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                dueDate={task.dueDate}
                status={task.status}
                onDelete={() => deleteTask(task.id)}
                onToggle={() => toggleTaskDone(task.id)}
              />
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center">
            <img
              src="https://media.istockphoto.com/id/1389646741/vector/open-empty-diagonally-placed-cardboard-box-putting-goods-personal-things-3d-icon-realistic.jpg?s=612x612&w=0&k=20&c=BDqVoUejEImVDJbzslGK8tP49A7h0B1oQpd5msfD6gs="
              alt="No data"
              className="w-48 h-48 mb-4"
            />
            <p className="text-gray-500">
              No se han encontrado resultados para tu búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
