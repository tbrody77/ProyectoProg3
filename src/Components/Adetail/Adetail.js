import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Adetail extends Component {
  constructor() {
    super();
    this.state = {
      albumes: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params; // Para obtener el ID de la canción desde los parámetros de ruta
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ albumes: data.albums.data });
      })
      .catch((error) => {
        console.log('El error es' + error);
      });
  }

  render() {
    const { albumes } = this.state;

    return (
      <article className="trackbox">
        {albumes.map((album) => {
          return (
            <div key={album.id}>
              <img src={album.album.cover} alt="" className="fotoback track" />
              {/* <a href="./detail-artist.html" className="nombretema"> */}
                <br /> {album.title}
              {/* </a> */}
              <br />
              <Link to={'/adetail/${album.album.id}'} className="albumde">
                <br /> {album.album.title}
              </Link>
              <br />
              {/* <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/track/${cancion.id}?utm_source=generator&theme=0`}
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe> */}
              <br />
              <br />
            </div>
          );
        })}
        <button className="boton">+ Agregar a mi Playlist</button>
      </article>
    );
  }
}

export default Adetail;