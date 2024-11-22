import React, { useState }  from 'react'

function TasksForm({createTask}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault() // Evita que la página se recargue
        createTask({ //le voy a mandar a App la nueva tarea mediante la función createTask
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
