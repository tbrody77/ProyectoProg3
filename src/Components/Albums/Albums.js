import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Albums extends Component {
  constructor() {
    super();
    this.state = {
      albums:[]
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
  render() {
    const{albums} = this.state
    return (
      <section>
        {this.state.albums.length > 0 ? (
        <><h2 className="cancionespopulares">TOP 100 ALBUMS</h2>
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
          
        </article> </>
        ):<p className='cargando'>Loading...</p>}
      </section>
    );
  }
}

export default Albums;