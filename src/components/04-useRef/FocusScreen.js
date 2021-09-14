import React, { useRef } from 'react';
import '../css/index.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(`${inputRef}`);
    const handleClick = () => {
        // document.querySelector('input').focus();
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <input
                ref = { inputRef } 
                className="form-control"
                placeholder="Su nombre "
            />
            <br />
            <button
                className="btn btn-primary"
                onClick= { handleClick }
            >
                Focus
            </button>
        </div>
    )
}
