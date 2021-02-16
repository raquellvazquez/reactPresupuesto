import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarRestante, guardarPresupuesto}) => {

    /**
     * State para guardar la cantidad total de presupuesto
     * 
     */
    const [cantidad, guardarCantidad] =  useState(0);

    /**
     * State para manejar los errores
     */

     const [error, guardarError] = useState(false);

    /**
     * Función para leer el presupuesto
     * @param {*} e string
     */
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    /**
     * Submit para definir el presupuesto
     */

     const agregarPresupuesto = (e) => {
         e.preventDefault();

         //validar 

        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

         // si se pasa la validación
         guardarCantidad(false);
         guardarPresupuesto(cantidad);
         guardarRestante(cantidad);
     }
    

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto fue incorrecto" />  : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
Pregunta.propTypes = {
    guardarRestante: PropTypes.func.isRequired,
    guardarPresupuesto: PropTypes.func.isRequired,
}
export default Pregunta;