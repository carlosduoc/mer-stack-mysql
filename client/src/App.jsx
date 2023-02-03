import React from "react";
import { Route, Routes } from "react-router-dom";
import TasksForm from "./pages/Tasksform.jsx";
import TaskPage from "./pages/TasksPage.jsx";
import NoFound from "./pages/noFound.jsx";
import Navbar from "./components/navbar.jsx";
import { TaskContextProvider } from "./context/TaskProvider.jsx";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/new" element={<TasksForm />} />
            <Route path="/edit/:id" element={<TasksForm />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
