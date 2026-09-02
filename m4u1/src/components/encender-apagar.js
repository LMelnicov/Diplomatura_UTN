'use client';

import React, { useState } from "react";

export function BotonLuz() {
    //inicializacion del estado
    const [isOn, setIsOn] = useState(true); //true => encendido

    //manejo del click (handleToggle es simplemente el nombre de la funcion, podria tener cualquier nombre)
    const handleToggle = () => {
        
        //operador ! => negacion
        setIsOn(!isOn);  //false => apagado
    };

    return(

        <button onClick={handleToggle}>
            {/*  texto dinamico basado en el estado */}
            {isOn ? 'Encendido' : 'Apagado'}
        </button>

    );
}