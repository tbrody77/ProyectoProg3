import React from "react";
import logo from '../../img/punk_PNG10.png'
import { Link } from 'react-router-dom';
import Formulario from "../Formulario/Formulario";

function Title(){
    return(  <header className="header">
    <div className="cajaLogo">
        <Link to='/'>
        <img src={logo} alt="Logo Proyecto" className="logo"/>
        <p className="mweb">MSOUND</p>
        </Link>
    </div>
    <div className="claselinks">
        <div className="cajalink"><Link to="/" className="links">HOME  |</Link></div>
        <div className="cajalink"><Link to="/canciones" className="links">CANCIONES  |</Link></div>
        <div className="cajalink"><Link to="/albums" className="links">ALBUMS  |</Link></div>
        <div className="cajalink"><Link to="/favoritos" className="links">TUS FAVORITOS</Link></div>
        
    </div>
   { <Formulario></Formulario> }
</header>

    )
}

export default Title 