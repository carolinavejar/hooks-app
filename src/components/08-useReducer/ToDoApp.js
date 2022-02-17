import React, { useReducer } from 'react';
import { useEffect } from 'react/cjs/react.development';
import '../css/index.css';
import { TodoAdd } from './TodoAdd';
import { ToDoList } from './ToDoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [ todos, dispatch ] = useReducer(todoReducer, [],  init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = ( id ) => {
        console.log( id );

        const deleteTodo = {
            id: id,
        }

        const action = {
            type: 'remove',
            payload: deleteTodo
        };

        dispatch(action);

    }

    const handleToggle = (pID) => {
        dispatch( {
            type: 'toggle',
            payload: pID
        });
    };

    const handleAdd = ( newTodo) =>{

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div id = "todoList">
            <h1>To Do App ( {todos.length} )</h1>
            <hr />

            <div className = "row">
                <div className="col-7">
                    <ToDoList
                        todos = { todos }
                        handleDelete = { handleDelete}
                        handleToggle = { handleToggle }
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAdd = { handleAdd }
                    />
                </div>
            </div>
        </div>
    )
}
