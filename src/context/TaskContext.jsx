import React, { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/Tasks'

//Nombre del contexto
export const TaskContext = createContext()

//Componente que engloba al resto de los componentes
export function TaskContextProvider({children}) {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data) //renderiza el array inical una sola vez y lo guarda en tasks
  }, [])

  function createTask(task) {
    
    setTasks([...tasks, {
      title: task.title,
      id: task.length,
      description: task.description
    }])
    console.log(tasks)
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    //hace que todos los componentes puedan acceder a tasks, createTask, deleteTask
    <TaskContext.Provider value={{
      tasks: tasks,
      deleteTask: deleteTask,
      createTask: createTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}

// export {TaskContextProvider}
