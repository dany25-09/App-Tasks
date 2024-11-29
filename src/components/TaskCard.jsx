import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {

  const { deleteTask, getRandomColors } = useContext(TaskContext);
  const { divColor, buttonColor } = getRandomColors();

  return (
    <div className={`${divColor} text-white w-full h-38 p-4 mb-3 rounded-md`}>
      <h1 className='text-3xl font-bold capitalize'>{task.title}</h1>
      <h4 className='text-gray-200 text-2xl'>{task.description}</h4>
      <button
        className={`${buttonColor} w-48 h-11 px-2 py-1 border-2 rounded-md mt-4 text-xl font-medium hover:bg-opacity-50 hover:transform transition-transform duration-300 hover:scale-110`}
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export { TaskCard };

