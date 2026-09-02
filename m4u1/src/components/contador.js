'use client';

import React, {useState} from 'react';

export function Contador() {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1); //Actualiza el estado
    };

    return(
        <div>
            <p>Has hecho click {contador} veces.</p>
            {/* Manejo de Evento del lado del cliente */}
            <button onClick={handleClick}>
                Incrementar
            </button>
        </div>
    )
}