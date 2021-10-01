import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {

    const { user } = useContext(UserContext);
    
    return (
        <div className="container">
            <h3>Home Pages</h3>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>
        </div>
    )
}
