import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Formulario from "../Formulario/Formulario";

class Resultados extends Component {
  constructor() {
    super();
    this.state = {
      canciones: [],
      filtro: "",
      valorBuscador: '' // Agregar un estado para almacenar el filtro
    };
  }

  componentDidMount() {
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.state.valorBuscador}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ canciones: data.data }); 
      })
      .catch((error) => {
        console.log('El error es' + error);
      })
  }
  componentDidUpdate() {
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.state.valorBuscador}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ canciones: data.data }); 
      })
      .catch((error) => {
        console.log('El error es' + error);
      })
  }
  actualizarBusqueda(valor){
      this.setState({valorBuscador: valor})
  }
  // Función para manejar cambios en el campo de filtro
  handleFiltroChange = (event) => {
    this.setState({ filtro: event.target.value });
  }

  render() {
    const { canciones, filtro } = this.state;

    // Filtrar las canciones basadas en el filtro ingresado
    let cancionesFiltradas = []
    if(canciones !== undefined){
      cancionesFiltradas = canciones.filter((cancion) =>
      cancion.title.toLowerCase().includes(filtro.toLowerCase())
    );
    }

    return (
      <section>
        <Formulario actualizar={(valor)=>this.actualizarBusqueda(valor)}></Formulario>


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
            <p className='cargando'> ⛔️ No se encontraron resultados, buscá nuevamente ⛔️</p>
          )}
        </article>
      </section>
    );
  }
}

export default Resultados;
