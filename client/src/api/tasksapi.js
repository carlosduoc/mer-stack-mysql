import axios from "axios";

export const getTasksRequest = async () => {
  await axios.get("http://localhost:4000/tasks");
};

export const GetTaskRequest = async (id) => {
  await axios.get(`http://localhost:4000/tasks/${id}`);
};

export const CreateTaskRequest = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};

export const DeleteTasksRequest = async (id) => {
  await axios.delete(`http://localhost:4000/tasks/${id}`);
};

export const UpdateTasksRequest = async (id, newField) => {
  await axios.put(`http://localhost:4000/tasks/${id}`,newField);
};

export const ToggleTaskRequest = async (id, done) => {
  await axios.put(`http://localhost:4000/tasks/${id}`,{done});
};

