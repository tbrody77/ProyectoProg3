import React from "react";
import logo from '../../img/punk_PNG10.png'

function Title(){
    return(  <header class="header">
    <div class="cajaLogo">
        <img src={logo} alt="Logo Proyecto" class="logo"/>
        <p class="mweb">MSOUND</p>
    </div>
    <div class="claselinks">
        <div class="cajalink"><a href="./home.html" class="links">HOME</a></div>
        <div class="cajalink"><a href="./playlist.html" class="links">PLAYLIST</a></div>
        <div class="cajalink"><a href="./genres.html" class="links">GENEROS</a></div>
    </div>
    <div class="cajaforms">
        <form class="form" action="./search-results.html" method="GET">
            {/* <input type="text" id="navegador" name="search" value="" placeholder="Buscar por título"> */}
            <button type="submit">
             <i class="fas fa-search"></i>
            </button>
        </form>
    </div>
</header>

    )
}

export default Title 