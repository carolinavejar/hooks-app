import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutPage = () => {
    const { user, setUser } = useContext(UserContext);

    const handleClick = ()=>{
        setUser({});
    }

    return (
        <div className="container">
            <h3>About Page</h3>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>
            
            <button 
                className = "btn btn-primary"
                onClick = { handleClick }
            >
                Login
            </button>

        </div>
    )
}
