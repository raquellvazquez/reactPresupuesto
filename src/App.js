import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  /**
   * State para el presupuesto inicial
   */
  const [presupuesto, guardarPresupuesto] = useState(0);

  /**
   * State para guardar el restante
   */
  const [restante, guardarRestante] = useState(0);

  /**
   * Listado de gastos
   */
  const [gastos, guardarGastos] = useState([]);

  const[gasto, guardarGasto] = useState({})

  const[creargasto, guardarCrearGasto] = useState(false);

  /**
   * Actualizar el restante
   */

  useEffect(() => {
    if(creargasto) {
      // agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);
      // resta el presuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
      guardarCrearGasto(false);
    }
  }, [gasto])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {presupuesto ? (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  guardarGasto={guardarGasto}  
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado  gastos={gastos}/>
                <ControlPresupuesto  
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )
            : (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
              />
            )
          }


        </div>
      </header>
    </div>
  );
}

export default App;
