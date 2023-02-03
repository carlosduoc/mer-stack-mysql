import { useTasks } from "../context/TaskProvider.jsx";
import { useNavigate } from "react-router-dom";

function TaskCard({ item }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const Navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(item.id);
  };

  return (
    <div className="bg-slate-300 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-xl font-bold">{item.title}</h2>
        <span>{item.done == 1 ? "✔️" : "❌"}</span>
      </header>
      <p className="text-sm">{item.description}</p>
      <span>{item.createAt}</span>
      <div className="flex gap-x-1">
        <button className="bg-red-500 px-2 py-1 text-white" onClick={() => deleteTask(item.id)}>Delete</button>
        <button className="bg-blue-500" onClick={() => Navigate(`/edit/${item.id}`)}>Editar</button>
        <button className="bg-blue-500" onClick={() => handleDone(item.done)}> ¿Realizado?</button>
      </div>
    </div>
  );
}

export default TaskCard;
