import React, { useReducer } from 'react';
import '../css/index.css';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        };
        dispatch(action);
        console.log(`Nueva tarea`);
    };

    
    console.log(todos);
    return (
        <div id = "todoList">
            <h1>To Do App ( {todos.length} )</h1>
            <hr />

            <div className = "row">
                <div className="col-7">
                    
                    <ul>
                        {
                            todos.map( (todo, i) => (
                                <li
                                    key = { todo.id }
                                    className = "list-group-item"
                                >
                                    <small>{ i + 1 }. {todo.desc}</small>

                                    <button 
                                        className="btn btn-outline-primary ml-3" 
                                        id = "btnBorrar"
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TO DO</h4>
                    <hr />
                    <form onSubmit = { handleSubmit }>
                        <div className = "d-grid gap-2">
                            <input
                                className = "form-control"
                                type = "text"
                                name = "decription"
                                placeholder = "Aprender ..."
                                autoComplete = "off"
                            />
                            <button 
                                type = "submit"
                                className="btn btn-outline-primary btn-block mt-1" 
                            >
                                Agregar
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
