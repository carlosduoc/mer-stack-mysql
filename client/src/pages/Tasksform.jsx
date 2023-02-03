import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TasksForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  useEffect(() => {
    const loadTasks = async () => {
      if (params.id) {
        console.log("Cargando información");
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTasks();
  }, []);

  return (
    <div>
      
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            await updateTask(params.id, values);
            
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-md rounded-md p-4 mx-auto mt-10">
            <h1 className="text-xl font-bold uppercase text-center" >{params.id ? "Editanto Tarea" : "Creando Tareas"}</h1>
            <label className="block">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Escribe acá"
              onChange={handleChange}
              value={values.title}
              className="px-2 py-1 rounded-sm w-full"
            ></input>
            <label className="block">Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Agrega la descripción"
              onChange={handleChange}
              value={values.description}
              className="px-2 py-1 rounded-sm w-full"
            ></textarea>
            <button type="submit" disabled={isSubmitting} className="block bg-blue-500 px-2 py-1 w-full rounded-md">
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default TasksForm;
