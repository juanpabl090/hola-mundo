import React from 'react';
import PropTypes from 'prop-types';

import ComponenteB from '../pure/componenteB';

import { contacto } from '../../models/contacto'


const ComponenteA = (Contacto) => {
    return (
        <div>
            <p>Nombre: {Contacto.nombre}</p>
            <p>Apellido: {Contacto.apellido}</p>
            <p>Email: {Contacto.email}</p>
            <ComponenteB estado={false} />
        </div>
    );
};


ComponenteA.propTypes = {
    Contacto: PropTypes.instanceOf(contacto)
};


export default ComponenteA;
