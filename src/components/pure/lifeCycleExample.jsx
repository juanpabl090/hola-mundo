/**
 * Ejemplo de componente de tipo clase que dispone 
 * de los metodos de ciclo de vida
 */

import React, { Component } from "react";
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }
    componentWillMount() {
        console.log('componentWillMount: Antes del montaje del componente')
    }
    componentDidMount() {
        console.log('componentDidMount: Jutso al del montaje del componente, antes de renderizarlo')
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps: si va a recibir nuevas props')
    }
    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        // return true; / false
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate: Justo antes de actualizarse')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Justo despues de actualizarse')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default LifeCycleExample;
