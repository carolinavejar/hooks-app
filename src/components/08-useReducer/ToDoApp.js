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
        <div>
            <h1>To Do App</h1>
            <hr />
            <ul>
                <li>Hola 1</li>
                <li>Hola 2</li>
                <li>Hola 3</li>
            </ul>
        </div>
    )
}
