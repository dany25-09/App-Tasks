import { TaskList } from "./components/TaskList";
import { TasksForm } from "./components/TasksForm";
// console.log(tasks)
import React, {useState, useEffect} from "react";

function App() {

  return (
    <main className="bg-primary h-screen w-full font-Montserrat">
      <section className="w-11/12 h-full container mx-auto p-10">
        <TasksForm/>
        <TaskList/>
      </section>
    </main>
  );
}

export { App };

