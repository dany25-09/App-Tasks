import React from 'react'

function TaskCard({task, deleteTask}) {
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
