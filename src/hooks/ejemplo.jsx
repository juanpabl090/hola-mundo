/**
 * Ejemplo de uso del hook usestate
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a traves de un hook y, ademas, poder modificarlo
 */


import React, { useState } from 'react';

const Ejemplo = () => {

    //Valor inical para un contador
    const valorInical = 0;

    // valor inical para una persona
    const personaInical = {
        nombre: 'Juan',
        email: 'juanrona12@gmail.com'
    }

    /**
     * Queremos que el valorinicial y personainial sean 
     * parte del componente para asi poder gestionar su cambio y 
     * que este se vea reflejado en la vista del componente
     */

    const [contador, setContador] = useState(valorInical);

    const [persona, setPersona] = useState(personaInical);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */

    function incrementarContador() {

        //? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'pepe',
                email: 'pepe@gmail.com',
            }
        );
    }

    return (
        <div>
            <h1>Ejemplo de <code>useState()</code></h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona: </h2>
            <h3>nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}> Incrementar</button>
            <br />
            <button onClick={actualizarPersona}> Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo;

