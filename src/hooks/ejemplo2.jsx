/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */
import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos
    // cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemnto del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect
     * ? Caso 1: Ejecutar SIEMPRE un snipet de codigo
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */
    /* useEffect(() => {
        console.log('Cambio en el estado del componente');
        console.log('Mostrando referencia a elemento HTML');
        console.log(miRef)
    }); */


    /**
     * ? Case 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
     * en caso de que cambie contador2, no habra ejecucion
     */

    useEffect(() => {
        console.log('Cambio en el estado del contador 1 / contador 2');
        console.log('Mostrando referencia a elemento HTML');
        console.log(miRef)
    }, [contador1, contador2]);

    return (
        <div>
            <h1>Ejemplo de <code>useState(), useRef() y useEffect()</code></h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemnto Referenciado */}
            <h4 ref={miRef}> ejemplo de elemento referenciado </h4>
            <div>
                <button onClick={incrementar1}>Incrementar uno</button>
                <br />
                <button onClick={incrementar2}>Incrementar dos</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
