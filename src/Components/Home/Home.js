import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Boton from "../Boton/Boton";
import CancionesItem from "../CancionesItem/CancionesItem";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      canciones: [],
      albums:[]
    };
  }

  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=5')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ canciones: data.data});
      })
      .catch((error) => {
        console.log('El error es' + error);
      });
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=5')
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data);
        this.setState({albums: data.data})
      })
      .catch((error)=>{
        console.log('El error es' + error);
      })
  }

  render() {
    
    const { canciones } = this.state;
    const{albums} = this.state
    console.log(albums);
    return (
      <section>
        <h2 className="cancionespopulares">CANCIONES POPULARES</h2>
        <article className="articleCanciones">
          {canciones.map((cancion) => {
            return (
              <CancionesItem cancion = {cancion}></CancionesItem>
            );
          })}
        </article>

        <h2 className="cancionespopulares">ALBUMES POPULARES</h2>
        <article className="articleAlbum">
          {albums.map((album)=>{
            return(
            <div className="padre1">
              <Link to={`/adetail/${album.id}`} className="album">
              <img src={album.cover} alt="" />
              <p className="tituloAlbum">{album.title}</p> <br />
              <p className="albumDe">{album.artist.name}</p>
            </Link>
          </div>
            )
          })}
          
        </article>
      </section>
    );
  }
}

export default Home;