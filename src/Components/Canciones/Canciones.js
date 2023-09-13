import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Canciones extends Component {
  constructor() {
    super();
    this.state = {
      canciones: [],
      filtro: "", // Agrega un estado para almacenar el filtro
    };
  }

  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=100')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ canciones: data.data });
      })
      .catch((error) => {
        console.log('El error es' + error);
      })
  }

  // Función para manejar cambios en el campo de filtro
  handleFiltroChange = (event) => {
    this.setState({ filtro: event.target.value });
  }

  render() {
    const { canciones, filtro } = this.state;

    // Filtrar las canciones basadas en el filtro ingresado
    const cancionesFiltradas = canciones.filter((cancion) =>
      cancion.title.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
      <section>
        {this.state.canciones.length > 0 ? (
          <>
        <h2 className="cancionespopulares">TOP 100 MUNDIAL 🚀</h2>

    
        <form>
          <label className=''>🔍</label>
          <input type="text" id="filtro" name="filtro" placeholder='Filtrar por nombre de canción:' value={filtro} onChange={this.handleFiltroChange}/>
        </form>

        <article className="articleCanciones">
          {cancionesFiltradas.length > 0 ? (
            cancionesFiltradas.map((cancion) => {
              return (
                <div className="padre" key={cancion.id}>
                  <Link to={`/tdetail/${cancion.id}`} className="cancion">
                    <img src={cancion.album.cover} alt="" />
                    <p className="nombrecancion">{cancion.title}</p> <br />
                    <p className="cantante">{cancion.artist.name}</p>
                  </Link>
                </div>
              );
            })
          ) : (
            <p className='cargando'>No se encontraron canciones</p>
          )}
        </article>
        </>
         ):<p className='cargando'>Loading... ⏳</p>}
      </section>
    );
  }
}

export default Canciones;
