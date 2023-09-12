import React from "react";
import logo from '../../img/punk_PNG10.png'
import { Link } from 'react-router-dom';

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
    <div className="cajaforms">
        <form className="form" action="./search-results.html" method="GET">
            <input type="text" id="navegador" name="search" placeholder="Buscar por título"></input>
            <button type="submit">
             <i className="fas fa-search"></i>
            </button>
        </form>
    </div>
</header>

    )
}

export default Title 