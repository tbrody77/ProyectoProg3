import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Adetail extends Component {
  constructor() {
    super();
    this.state = {
      album: []
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
        

            <div key={album.id}>
              <img src={album.cover} alt="" className="fotoback track" />
              {/* <a href="./detail-artist.html" className="nombretema"> */}
                <br /> {album.title}
              {/* </a> */}
              <br />
              <Link to={'/adetail/${album.album.id}'} className="albumde">
                <br /> {album.title}
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
          
        
      </article>
    )
  }
}

export default Adetail;