import React, { useReducer } from 'react';
import '../css/index.css';
import { toDoReducer } from './toDoReducer';

export const ToDoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]

    const [ toDos] = useReducer(toDoReducer, initialState);
    console.log(toDos);
    return (
        <div id = "todoList">
            <h1>To Do App ( {toDos.length} )</h1>
            <hr />

            <div className = "row">
                <div className="col-7">
                    
                    <ul>
                        {
                            toDos.map( (todo, i) => (
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
                    <form>
                        <div className = "d-grid gap-2">
                            <input
                                className = "form-control"
                                type = "text"
                                name = "decription"
                                placeholder = "Aprender ..."
                                autoComplete = "off"
                            />
                            <button 
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
