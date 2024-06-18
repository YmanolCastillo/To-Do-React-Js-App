import { useState } from "react";
import { Task } from "./types";
import { EnumTaskStatus } from "../../constants/enumTaskStatus";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<EnumTaskStatus>(
    EnumTaskStatus.ALL
  );
  const [dateFilter, setDateFilter] = useState<string>("");

  const addTask = (title: string, dueDate: string) => {
    if (title.trim() !== "" && dueDate.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), title, dueDate, status: EnumTaskStatus.PENDING },
      ]);
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === EnumTaskStatus.PENDING
                  ? EnumTaskStatus.CLOSED
                  : EnumTaskStatus.PENDING,
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesTitle = task.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesStatus =
      statusFilter === EnumTaskStatus.ALL || task.status === statusFilter;
    const matchesDate = dateFilter === "" || task.dueDate <= dateFilter;
    return matchesTitle && matchesStatus && matchesDate;
  });

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    statusFilter,
    setStatusFilter,
    dateFilter,
    setDateFilter,
    addTask,
    deleteTask,
    toggleTaskDone,
  };
};
