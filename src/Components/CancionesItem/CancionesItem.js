import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CancionesItem extends Component{
    constructor(props){
        super(props);
        this.state = { textoBoton:"Agregar a favoritos" 
        }
    }
    componentDidMount(){
        let recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage !== null){

        if(recuperoStorage.includes(this.props.cancion.id)){   
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }
    }
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


        render () {
                    return (<div className="padre" key={this.props.cancion.id}>
                    <Link to={`/tdetail/${this.props.cancion.id}`} className="cancion">
                    <img src={this.props.cancion.album.cover} alt="" />
                    <p className="nombrecancion">{this.props.cancion.title}</p> 
                    <p className="cantante">{this.props.cancion.artist.name}</p>
                    </Link>
                    <button onClick={()=> this.favoritos(this.props.cancion.id)}> {this.state.textoBoton}</button>
                </div> )

    }
}
export default CancionesItem;