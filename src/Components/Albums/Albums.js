import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Albums extends Component {
  constructor() {
    super();
    this.state = {
      albums:[],
      filtro: ''
    };
  }
  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=100')
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data);
        this.setState({albums: data.data})
      })
      .catch((error)=>{
        console.log('El error es' + error);
      })
  }
  // Función para manejar cambios en el campo de filtro
  handleFiltroChange = (event) => {
    this.setState({ filtro: event.target.value });
  }
  render() {
    const{albums, filtro} = this.state
    // Filtrar los albums basadas en el filtro ingresado
    const albumsFiltrados = albums.filter((album) =>
      album.title.toLowerCase().includes(filtro.toLowerCase())
    );
    return (
      <section>
        {this.state.albums.length > 0 ? (
        <><h2 className="cancionespopulares">TOP 100 ALBUMS 🚀</h2>
        {/* Formulario de filtro */}
        <form>
          <label htmlFor="filtro">🔍</label>
          <input type="text" id="filtro" name="filtro" placeholder="Filtrar por nombre de album" value={filtro} onChange={this.handleFiltroChange}/>
        </form>
        <article className="articleAlbum">
        {albumsFiltrados.length > 0 ? (
          albums.map((album) => {
          return (
            <div className="padre1">
                <Link to={`/adetail/${album.id}`} className="album">
                    <img src={album.cover} alt="" />
                    <p className="tituloAlbum">{album.title}</p> <br></br>
                    <p className="albumDe">{album.artist.name}</p>
                </Link>
            </div>
        )
        })
) : <p className="cargando">No se encontraron albums</p>}

         
          
        </article> </>
        ):<p className='cargando'>Loading... ⏳</p>}
      </section>
    );
  }
}

export default Albums;