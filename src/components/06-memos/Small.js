import React , { memo } from 'react';

export const Small =memo (( { value} ) => {
    console.log(`Llamada a Small`);
    return (
        <div>
            <small> { value } </small>
        </div>
    )
});
