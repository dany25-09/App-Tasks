import React, { useContext } from 'react';
import { TaskCard } from './TaskCard';
import { TaskContext } from '../context/TaskContext';

function TaskList() {

  const { tasks } = useContext(TaskContext) //Voy a usar tasks que está guardado en el contexto

  if (tasks.length == 0){
    return <h1 
    className='text-white text-4xl font-medium text-center'
    >No hay tareas aún
    </h1>
  }

  return(
    <div className='h-2/4 grid grid-cols-1 gap-2 overflow-y-auto'>
      {
        tasks.map(task => (
          <TaskCard key={task.id} task={task}/> // cuando se de un click se ejecuta esta función
        ))
      }
    </div>
    
  )
}

export {TaskList}
