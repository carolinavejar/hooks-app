import React from 'react'

export const ShowIncrement = React.memo(( { increment }) => {
    console.log(`me volví a incrementar`);
    return (
        <div>
            <button 
                className="btn btn-primary ml-3" 
                onClick={ () => {
                    increment(5)
                } }
            >
                Incrementar
            </button>
        </div>
    )
})
