import React from 'react' //imr

//Un componente siempre es una función 

//Esta creación de componentes se llama FUNCTION DECLARATION
/* function Header({titulo}){

    //return es una función de React. Lo que se coloque dentro, se va a mostrar en pantalla
    //React usa JSX: permite mezclar HTML con JS
    //Para poder acceder a un prop hay que utilizar llaves
    return(
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
} */

//FUNCTION EXPRESSION. Se pueden usar las teclas sfc
//En esa función está implicito el return. Entonces se pueden quitar el return y las llaves
const Header = ({titulo}) =>( 
       <h1>{ titulo }</h1>      
    );



export default Header; //Una vez exportado, lo tenemos que importar en el archivo App.js
