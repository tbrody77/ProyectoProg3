import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      canciones: [],
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ canciones: data.albums.data});
      })
      .catch((error) => {
        console.log('El error es' + error);
      });
  }

  render() {
    const { canciones } = this.state;

    return (
      <section>
        <h2 className="cancionespopulares">CANCIONES POPULARES</h2>
        <article className="articleCanciones">
          {canciones.map((cancion) => {
            return (
              <div className="padre" key={cancion.id}>
                <a href="./detailsong.html" className="cancion">
                  <img src="" alt="" />
                  <p className="nombrecancion">{cancion.title}</p> <br />
                  <p className="cantante">{cancion.name}</p>
                </a>
              </div>
            );
          })}
        </article>

        <h2 className="cancionespopulares">ALBUMES POPULARES</h2>
        <article className="articleAlbum">
          <div className="padre1">
            <a href="./detail-album.html" className="album">
              <img src="" alt="" />
              <p className="tituloAlbum"></p> <br />
              <p className="albumDe"></p>
            </a>
          </div>
        </article>

        <h2 className="cancionespopulares">CANTANTES POPULARES</h2>
        <article className="articleCantantes">
          <div className="cantantesPopulares">
            <a href="./detail-artist.html" className="canciones">
              <img src="" alt="" />
              <p className="nombreCantante"></p> <br />
            </a>
          </div>
        </article>
      </section>
    );
  }
}

export default Home;
