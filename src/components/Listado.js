import React from 'react';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listados</h2>
            {gastos.map(gasto => (
                    <li className="gastos" key={gasto.id}>
                        <p>{gasto.nombre}
                        <span className="gasto">$ {gasto.cantidad}</span>
                        </p>
                    </li>
            ))}
        </div>
     );
}
 
Listado.propTypes = {
    gastos: PropTypes.array.isRequired,
}
export default Listado;