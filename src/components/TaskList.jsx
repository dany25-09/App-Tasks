import React from 'react';
import { TaskCard } from './TaskCard';

function TaskList({tasks, deleteTask}) {

  if (tasks.length == 0){
    return <h1>No hay tareas aún</h1>
  }

  return(
    <div>
      {
        tasks.map(task => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask}/> // cuando se de un click se ejecuta esta función
        ))
      }
    </div>
    
  )
}

export {TaskList}
