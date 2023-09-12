import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Canciones extends Component {
  constructor() {
    super();
    this.state = {
      canciones: [],
    };
  }

  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=100')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ canciones: data.data});
      })
      .catch((error) => {
        console.log('El error es' + error);
      })
    }

      render() {
    
        const { canciones } = this.state;
        return (
          <section>
            {this.state.canciones.length > 0 ? (
            <><h2 className="cancionespopulares">TOP 100 MUNDIAL</h2>
            <article className="articleCanciones">
              {canciones.map((cancion) => {
                return (
                  <div className="padre" key={cancion.id}>
                    <Link to={`/tdetail/${cancion.id}`} className="cancion">
                    <img src={cancion.album.cover} alt="" />
                    <p className="nombrecancion">{cancion.title}</p> <br />
                    <p className="cantante">{cancion.artist.name}</p>
                      </Link>
                      
                  </div>
                );
              })}
            </article></>
            ):<p className='cargando'>Loading...</p>}
            </section>
    );
  }
}

export default Canciones;