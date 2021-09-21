import React from 'react'
import { ToDoListItem } from './ToDoListItem';

export const ToDoList = ({todos, handleDelete, handleToggle}) => {
    console.log(todos);
    return (
        
        <ul>
            {
                todos.map( (todo, i) => (
                    <ToDoListItem
                        key = { todo.id }
                        todo = { todo }
                        i = { i }
                        handleDelete = { handleDelete }
                        handleToggle = { handleToggle}
                    />
                ))
            }
        </ul>
        
    )
}
