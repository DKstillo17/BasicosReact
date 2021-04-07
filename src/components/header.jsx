import React from 'react';

function Header({titulo}){
    const edad = 26;
    const nombre = 'Daniel';

    let  mensaje = "";

    if(edad >= 18){
        mensaje = "eres mayor de edad"
    }else{
        mensaje = "eres menor de edad"
    }

    return(
        <div className="header">
            {/* <h1>Saludos desde el header</h1>
            <h4>Hola {nombre}, tu edad es {edad}, entonces {mensaje}</h4> */}

            <h1> {titulo} </h1>
            
        </div>
    )
}

export default Header;