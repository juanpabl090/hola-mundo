/**
 * EJemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns componente 1
 * dispone de un contexto que va a tener un valor que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {

    //Inicializamos un estado vacio que va a 
    //rellenarse con los datos del padre
    const state = useContext(miContexto)
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>La sesion es:  {state.sesion}</h2>
        </div>
    );
}

export default function MiComponenteconContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que este aqui dentro puede leer todos los datos de sessionData */}
            {/* ademas, si se actualiza, los componenntes de aqui, tambien lo actualizan */}
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    )
}