import React, { useState, useContext }  from 'react'
import { TaskContext } from '../context/TaskContext'

function TasksForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext) //Voy a usar createTask que está guardado en el contexto

    const handleSubmit = (event) => {
        event.preventDefault() // Evita que la página se recargue
        createTask({ 
            title: title,
            description: description
        })
        setTitle("")
        setDescription("")

    }
    
    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder='Escribe tu tarea' 
                onChange={(event) => setTitle(event.target.value)} //me guarda el valor que se puso en el formulario
                value={title}
                autoFocus
            />
            <textarea placeholder='Descripcion de la tarea' onChange={(event) => setDescription(event.target.value)}
            value={description}
            >     
            </textarea>
            <button>
                Guardar 
            </button>
        </form>
    )
}

export {TasksForm}
