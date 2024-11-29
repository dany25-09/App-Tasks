import React, { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/Tasks';

//Nombre del contexto
export const TaskContext = createContext();

//Componente que engloba al resto de los componentes
export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const colorPalette = {
    secondary: ['bg-secondary', 'bg-secondary-complement'],
    tertiary: ['bg-tertiary', 'bg-tertiary-complement'],
    quaternary: ['bg-quaternary', 'bg-quaternary-complement'],
    fifth: ['bg-fifth', 'bg-fifth-complement'],
    sixth: ['bg-sixth', 'bg-sixth-complement'],
  };

  const getRandomColors = () => {
    const keys = Object.keys(colorPalette); // Obtiene las claves del objeto
    const randomKey = keys[Math.floor(Math.random() * keys.length)]; // Selecciona una clave aleatoria
    const [divColor, buttonColor] = colorPalette[randomKey]; // Desestructura los colores asociados
    return { divColor, buttonColor }; // Devuelve los colores
  };


  useEffect(() => {
    setTasks(data); // Renderiza el array inicial una sola vez y lo guarda en tasks
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length, // Genera un ID único basado en la longitud actual
        description: task.description,
      },
    ]);
    console.log(tasks);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    // Hace que todos los componentes puedan acceder a tasks, createTask, deleteTask
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
        getRandomColors: getRandomColors,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

