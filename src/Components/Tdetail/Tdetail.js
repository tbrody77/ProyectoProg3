import React, {Component} from 'react';

class Tdetail extends Component{
    constructor() {
        super();
        this.state = {cancion: []};
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

      render(){
        const {cancion} = this.state
        return(
            <article class="trackbox">
            {canciones.map((cancion) => {
                return (
            <><img src="./img-canciones/acdc.jpg" alt="" class="fotoback track" /><a href="./detail-artist.html" class="nombretema"><br /> {cancion.title}</a><br /><a href="./detail-album.html" class="albumde"><br /> {cancion.album}</a><br /><iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2iEGj7kAwH7HAa5epwYwLB?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe><br /><br /></>
             );
          })}
            <button class="boton">+ Agregar a mi Playlist</button>
        </article>
        )
      }

}