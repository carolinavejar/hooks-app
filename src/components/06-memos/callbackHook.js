import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    const increment = useCallback( (num) => {
        // setCounter(counter + num);
        setCounter(c => c + num);
    }, [setCounter])

    return (
        <div>
            <h1>useCallback Hook</h1>
            <h3> Counter { counter }</h3>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    )
}
