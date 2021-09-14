import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../css/index.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const {author, quote} = !!data && data[0];

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
        
    }, [quote]);

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote float-right">
                <p 
                    className="mb-0"
                    ref= { pTag }
                >
                        { quote }
                </p>
                <hr />
                <footer className="blockquote-footer">
                    { author }
                </footer>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button className="btn btn-primary" onClick={ increment }>
                Siguiente Blackquote
            </button>
           
        </div>
    )
}
