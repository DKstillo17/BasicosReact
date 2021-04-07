import React, { Fragment } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
    const fecha = new Date().getFullYear();
    return ( 

        <Fragment>
            <Header titulo="Tienda Virtual El Carmelo"/>
            <Footer fecha = {fecha}/>
        </Fragment>

    /*<div className = "App" >
        
        <h1> Bienvenidos a React </h1> 
        <header className = "App-header">
        </header> 
        
    </div>*/

    
    );
}

export default App;