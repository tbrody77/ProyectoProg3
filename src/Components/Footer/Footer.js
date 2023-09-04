import React from "react";
import logofoot from '../../img/punk_PNG10.png'

function Footer(){
    return(<footer className="myFooter">
        <div className="divf1">
            <img src={logofoot} alt="Logo Proyecto" className="logofoot"></img>
            <p className="mweb">MSOUND</p>
          </div>
        <div className="participantes">
            <p className="participantes">Ariel Bercovich</p>
            <p className="participantes">Tom Brody</p>
        </div>
    </footer>)}

export default Footer