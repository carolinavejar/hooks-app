import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../css/index.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    console.log(data);
    const {author, quote} = !!data && data[0];
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading ?
                (
                    <div className="lds-facebook"><div></div><div></div><div></div></div>
                )
                : 
                (
                    <blockquote className="blockquote float-right">
                        <p className="mb-0">{ quote }</p>
                        <hr />
                        <footer className="blockquote-footer">
                            { author }
                        </footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={ increment }>
                Siguiente Blackquote
            </button>
           
        </div>
    )
}
