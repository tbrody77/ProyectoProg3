import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Tdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cancion: null,
      textoBoton:'Agregar a favoritos'
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params; // Para obtener el ID de la canción desde los parámetros de ruta
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cancion: data });
        let recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage !== null){

        if(recuperoStorage.includes(this.props.cancion.id)){   
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }
    }
      })
      .catch((error) => {
        console.log('El error es' + error);
      });
      
  }
  favoritos(id){
    let arrayFavoritos = []
    let recuperoStorage = localStorage.getItem('favoritos');
    
    if(recuperoStorage !== null){
       arrayFavoritos = JSON.parse(recuperoStorage);   
    }
       
    if(arrayFavoritos.includes(id)){
        //Si el id está en el array queremos sacar el id.
        arrayFavoritos = arrayFavoritos.filter( unId => unId !== id);

        this.setState({
            textoBoton: "Agregar a Favoritos"
        })


    } else {
        arrayFavoritos.push(id);
        this.setState({
            textoBoton: "Quitar de favoritos"
        })
    }

    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)

    console.log(localStorage)
}

  render() {
    const { cancion } = this.state;

    return (
      <article className="trackbox">
          
            {this.state.cancion ? (
              <><div key={cancion.id}>
              <img src={cancion.album.cover} alt="" className="fotoback track" />
              {/* <a href="./detail-artist.html" className="nombretema"> */}
                <br /> {cancion.title}
              {/* </a> */}
              <br />
              <Link to={`/adetail/${cancion.album.id}`} className="albumde">
                <br /> {cancion.album.title}
              </Link>
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
            <button onClick={()=> this.favoritos(cancion.id)}> {this.state.textoBoton}</button>
              </>
              
            ): <p>loading...</p>}
            
          
        
      </article>
    );
  }
}

export default Tdetail;
