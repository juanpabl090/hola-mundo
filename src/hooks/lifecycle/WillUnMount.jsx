/**
 * Ejemplo de uso del metodo componentWillUMount para componene clase
 * Ejemplo de uso del Hook para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    componentWillUnmount() {
        console.log('Comportamiento antes de que el cmponente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        )
    }
}

export const WillUnMountHook = () => {
    useEffect(() => {
        //aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el cmponente desaparezca');
        }
    },[]);

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    )
}