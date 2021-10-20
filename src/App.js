import React, { Fragment, useState  } from 'react';
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";
import Spinner from "./componentes/Spinner";

function App() {
  //Definir el STATE. Retorna dos valores: el primero va a ser una variable que va a contener el valor.
  //El segundo va a ser una función que va a ser usada para estar interactuando y guardando lo que es el state que estamos creando. 
  //Se le puede dar un valor inicial. En este caso es cero
  const [cantidad, guardarCantidad] = useState(0); 
  const [plazo, guardarPlazo] = useState(""); 
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);


  //Carga condicional de componentes. En este caso va a mostrar el mensaje o el resultado total de la cotización
  let componente;
  if(cargando){
    componente = <Spinner />
  }else if(total === 0){
    componente = <Mensaje />
  }else{
    componente = <Resultado 
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
                />
  }

  return (
    <Fragment>
      <Header 
        titulo="Cotizador de Préstamos"
      />

      <div className="container">
          <Formulario 
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            guardarPlazo={guardarPlazo}
            guardarTotal={guardarTotal}
            guardarCargando={guardarCargando}
          />
          
          <div className="mensajes"> 
            {componente}
          </div>
      </div>
    </Fragment>
  );
}

export default App;
