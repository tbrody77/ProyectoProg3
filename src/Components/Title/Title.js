import React from "react";
import logo from '../../img/punk_PNG10.png'


function Title(){
    return(  <header className="header">
    <div className="cajaLogo">
        <img src={logo} alt="Logo Proyecto" className="logo"/>
        <p className="mweb">MSOUND</p>
    </div>
    <div className="claselinks">
        <div className="cajalink"><a href="./home.html" className="links">HOME</a></div>
        <div className="cajalink"><a href="./playlist.html" className="links">PLAYLIST</a></div>
        <div className="cajalink"><a href="./genres.html" className="links">GENEROS</a></div>
    </div>
    <div className="cajaforms">
        <form className="form" action="./search-results.html" method="GET">
            <input type="text" id="navegador" name="search" value="" placeholder="Buscar por título"></input>
            <button type="submit">
             <i className="fas fa-search"></i>
            </button>
        </form>
    </div>
</header>

    )
}

export default Title 