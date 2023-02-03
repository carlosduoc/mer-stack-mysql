import { useContext } from "react";
import { useState } from "react";
import React from "react";
import {
  DeleteTasksRequest,
  CreateTaskRequest,
  GetTaskRequest,
  getTasksRequest,
  UpdateTasksRequest,
  ToggleTaskRequest,
} from "../api/tasksapi.js";
import { TaskContext } from "./taskcontext.jsx";

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new error(
      "el usetask deberia estar dentro de un taskcontext provider"
    );
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await fetch("http://localhost:4000/tasks");
    const tareas = await response.json();
    setTasks(tareas);
  }

  const deleteTask = async (id) => {
    try {
      await DeleteTasksRequest(id);
      setTasks(tasks.filter((tasks) => tasks.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  //
  const getTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/tasks/${id}`);
      const tareas = await response.json();
      console.log(tareas);
      return tareas;
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (tasks) => {
    try {
      const response = await CreateTaskRequest(tasks);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newField) => {
    try {
      const response = await UpdateTasksRequest(id, newField);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await ToggleTaskRequest(id, taskFound.done === 0 ? true : false);
       setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
