import React, { useState, Fragment } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;

    //Definir State
    const [error, guardarError] = useState(false);

    //Cuando el usuario hace submit
    const calcularPrestamo = event =>{
        event.preventDefault();

        //Validar
       if(cantidad === 0 || plazo === ""){
            guardarError(true);
            return; //Evita que se ejecute la siguiente línea
       }

       //Eliminar el error previo
       guardarError(false);

       //Habilitar el spinner
       guardarCargando(true);

       setTimeout(() => {
           //Realizar la cotización
           const total = calcularTotal(cantidad, plazo);
    
           //Una vez calculado, guardar el total
           guardarTotal(total);

           //Deshabilitar el spinner
           guardarCargando(false);
       }, 2000);

    }


    return ( 
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000" 
                            onChange= {event => guardarCantidad(parseInt(event.target.value)) } //Evento de React
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange= {event => guardarPlazo(parseInt(event.target.value)) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>

            {(error) ? <p className="error">Todos los campos son obligatorios</p> : null }
            
        </Fragment>
     );
}
 
export default Formulario;