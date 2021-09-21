import React, { useReducer } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useForm } from '../../hooks/useForm';
import '../css/index.css';
import { ToDoList } from './ToDoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [ todos, dispatch ] = useReducer(todoReducer, [],  init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    }); 

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = ( e ) => {
        console.log( e );
        console.log( e.target.id );

        const deleteTodo = {
            id: e.target.id,
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

    const handleSubmit = (e) => {
        if(description.trim().length <= 0){
            return;
        }
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        };
        dispatch(action);
        reset();
        console.log(description);
    };

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
                    <h4>Agregar TO DO</h4>
                    <hr />
                    <form onSubmit = { handleSubmit }>
                        <div className = "d-grid gap-2">
                            <input
                                className = "form-control"
                                type = "text"
                                name = "description"
                                placeholder = "Aprender ..."
                                autoComplete = "off"
                                value = { description }
                                onChange = { handleInputChange }
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
