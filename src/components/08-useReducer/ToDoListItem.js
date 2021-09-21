import React from 'react'

export const ToDoListItem = ({todo, i, handleDelete, handleToggle}) => {
    return (
        <li
            key = { todo.id }
            className = "list-group-item"
        >
            <small
                className = { `${ todo.done &&  'complete' }`}
                onClick = { () => {  handleToggle(todo.id) } }
            >
                    { i + 1 }. {todo.desc}
            </small>

            <button 
                className="btn btn-outline-primary ml-3 btnBorrar" 
                id = { todo.id }
                onClick = { handleDelete }
            >
                Borrar
            </button>
        </li>
    )
}
