import React from "react";
import { useEffect } from "react";
import { getTasksRequest } from "../api/tasksapi.js";
import TaskCard from "../components/taskcard.jsx";  
import {useTasks} from "../context/TaskProvider.jsx"

function TasksPage() {
  
const {tasks, loadTasks} = useTasks()

  useEffect(() => {
    loadTasks();
  }, []);


  function RenderMain() {

    if (tasks.length===0) return <h1>No hay tareas ingresadas</h1>
    return tasks.map((item) => <TaskCard item={item} key={item.id} />);
  }
  return (
    <div>
      <h1 className= "text-5xl text-white font-bold text-center">TAREAS</h1>
     <div className="grid grid-cols-3 gap-2">
     {RenderMain()}
     </div>
    </div>
  );
}

export default TasksPage;
