import React, { Component } from 'react';

class Tdetail extends Component {
  constructor() {
    super();
    this.state = {
      canciones: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params; // Para obtener el ID de la canción desde los parámetros de ruta
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ canciones: data.albums.data });
      })
      .catch((error) => {
        console.log('El error es' + error);
      });
  }

  render() {
    const { canciones } = this.state;

    return (
      <article className="trackbox">
        {canciones.map((cancion) => {
          return (
            <div key={cancion.id}>
              <img src={cancion.album.cover} alt="" className="fotoback track" />
              <a href="./detail-artist.html" className="nombretema">
                <br /> {cancion.title}
              </a>
              <br />
              <a href="./detail-album.html" className="albumde">
                <br /> {cancion.album.title}
              </a>
              <br />
              <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/track/${cancion.id}?utm_source=generator&theme=0`}
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
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

export default Tdetail;
