import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext) //Voy a usar deleteTask que está guardado en el contexto

    return (
        <div>
            <h1>{task.title}</h1>
            <h4>{task.description}</h4>
            <button onClick={() => deleteTask(task.id)}>
                Eliminar tarea
            </button>
        </div>
    )
}

export {TaskCard}
