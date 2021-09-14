import React, { useState, useMemo } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const { counter, increment } = useCounter(500);
    const [ show, setShow ] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
           
            <hr />
            <h3> Counter : <small>{ counter }</small> </h3>
            <hr />
            <p> { memoProcesoPesado } </p>
            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button 
                className="btn btn-primary ml-3" 
                onClick={ () => {
                    setShow(!show);
                } }
            >
                Show / Hide { JSON.stringify(show)}
            </button>
        </div>
    )
}