import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginPage = () => {
    const { setUser } = useContext(UserContext);
    return (
        <div className="container">
            <h3>Login Screen</h3>
            <hr />
            <button 
                className = "btn btn-primary"
                onClick = { () => setUser({ name: 'Carito', id: 123 })}
            >
                Login
            </button>
        </div>
    )
}
