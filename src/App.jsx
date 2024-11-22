import { TaskList } from "./components/TaskList";
import { TasksForm } from "./components/TasksForm";
import { tasks as data } from './data/Tasks'
// console.log(tasks)
import React, {useState, useEffect} from "react";

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data) //renderiza el array inical una sola vez y lo guarda en tasks
  }, [])

  //Se le pasa esta función a TaskForm para que agregue una tarea nueva
  function createTask(task) {
    
    setTasks([...tasks, {
      title: task.title,
      id: task.length,
      description: task.description
    }])
    // console.log(tasks)
  }

  //Se le pasa esta función a TaskList y este a TaskCard para que elimine una tarea
  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <TasksForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}

export { App };

