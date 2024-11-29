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
            description: description,
        })
        setTitle("")
        setDescription("")

    }
    
    return (
        <div className='h-98 w-full mx-auto mb-10'>
            <form className='w-full h-full bg-seven p-10 mb-4 rounded-xl' onSubmit={handleSubmit}>
                <h1 className='text-4xl font-medium text-text mb-2'>Crea tu tarea</h1> 
                <input 
                    className='bg-transparent border-2 border-s-text-color px-3 my-5 w-full h-16 text-2xl text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-text focus:border-none placeholder-eight'
                    type="text" placeholder='Escribe tu tarea' 
                    onChange={(event) => setTitle(event.target.value)} //me guarda el valor que se puso en el formulario
                    value={title}
                    autoFocus
                />
                <textarea
                    className='bg-transparent border-2 border-s-text-color p-3 w-full h-36 mb-4 text-2xl text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-text focus:border-none placeholder-gray-400'
                    placeholder='Descripcion de la tarea' 
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                >     
                </textarea>
                <button
                    className='bg-text w-32 h-12 px-3 py-1 text-gray-800
                    text-xl font-semibold rounded-xl border-2 border-gray-800 hover:transform transition-transform duration-300 hover:scale-110 cursor-pointer'
                >
                    Guardar 
                </button>
            </form>
        </div>
    )
}

export {TasksForm}
