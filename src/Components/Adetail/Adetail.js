import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Adetail extends Component {
  constructor() {
    super();
    this.state = {
      album: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params; // Para obtener el ID de la canción desde los parámetros de ruta
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ album: data });
      })
      .catch((error) => {
        console.log('El error es' + error);
      });
  }

  render() {
    const { album } = this.state;
    console.log(album);

    return (
      <article className="trackbox">
        {this.state.album ?(
            <div key={album.id}>
            <img src={album.cover} alt="" className="fotoback track" />
              <br /> {album.artist.name}
            <br />
            <Link to={`/adetail/${album.id}`} className="albumde">
              <p>Géneros que encontrarás en el album {album.title}:</p>
               <div>
                {album.genres.data.map((genero)=><p>{genero.name}</p>)}
               </div>
            </Link>
                <p>{album.genres.release_date}</p>
                <p>Canciones del Album:</p>
                {album.tracks.data.map((cancion)=><Link to={`/tdetail/${cancion.id}`}><ul>- {cancion.title}</ul></Link>)}
          </div>
          
        ): <p>Loading...</p>}

            
          
        
      </article>
    )
  }
}

export default Adetail;