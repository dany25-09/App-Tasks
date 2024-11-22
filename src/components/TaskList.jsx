import React, { useContext } from 'react';
import { TaskCard } from './TaskCard';
import { TaskContext } from '../context/TaskContext';

function TaskList() {

  const { tasks } = useContext(TaskContext) //Voy a usar tasks que está guardado en el contexto

  if (tasks.length == 0){
    return <h1>No hay tareas aún</h1>
  }

  return(
    <div>
      {
        tasks.map(task => (
          <TaskCard key={task.id} task={task}/> // cuando se de un click se ejecuta esta función
        ))
      }
    </div>
    
  )
}

export {TaskList}
