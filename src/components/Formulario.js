import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid'
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    /**
     * State para  guardar gastos
     */

    const [nombre, guardarNombre] =useState('');
    const [cantidad, guardarCantidad]= useState(0);
    const [error, guardarError] = useState(false);
   
    /**
     * Almanenar gastos
     */

    const agregarGasto = (e) => {
        e.preventDefault();

        // validar gasto
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return
        }
        guardarError(false);
        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
         //pasar el gasto al componente principal
        guardarGasto(gasto);
        // resetear el form.
        guardarNombre('');
        guardarCantidad(0);
        guardarCrearGasto(true);

    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto"/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ejem. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ejem. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired,
}

export default Formulario;