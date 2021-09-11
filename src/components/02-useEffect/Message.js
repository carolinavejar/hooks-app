import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({ x: 0, y: 0});

    const  { x, y } = coors; 

    useEffect(() => {

        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y}
            console.log(coors);
            setCoors(coors);
        }

        console.log(`Componente montado`);

        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log(`Componente desmontado`);
        }
    }, [])
    return (
        <div>
            <h3>Eres genial uwu</h3>
            <p>
                x: {x}, y: {y}
            </p>
        </div>
    )
}
