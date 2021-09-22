import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    }); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length <= 0){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAdd(newTodo);
        reset();
    }

    return (
        <>
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
        </>
    )
}
