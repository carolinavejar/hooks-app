import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {

    const userContext = useContext(UserContext);
    console.log(userContext);
    return (
        <div className="container">
            <h3>Home Pages</h3>
            <hr />
        </div>
    )
}
