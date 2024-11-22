import { TaskList } from "./components/TaskList";
import { TasksForm } from "./components/TasksForm";
// console.log(tasks)
import React, {useState, useEffect} from "react";

function App() {

  return (
    <>
      <TasksForm/>
      <TaskList/>
    </>
  );
}

export { App };

