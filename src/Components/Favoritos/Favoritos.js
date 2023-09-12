import React, {Component} from 'react';
import CancionesItem from '../CancionesItem/CancionesItem';

class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            track:[],
        }
    }
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
    
        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage) 
            let listaCanciones = [];
            console.log(favoritos);
            favoritos.forEach(unIdFavorito => {
                let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${unIdFavorito}`
                fetch(url)
                    .then(response => response.json())
                    .then(data => listaCanciones.push(data))
                    .then(() => this.setState(
                        {
                            track : listaCanciones }
                            
                    ))
                    .catch(error => console.log('El error es' + error))
                  
            }) 
            
        }
    }
    render(){
         return(
                <article className="articleCanciones">
                    <h1 className='cancionespopulares'>Canciones Favoritas</h1>
                    {this.state.track.map((cancion) => {
                        return (
                        <CancionesItem cancion = {cancion}></CancionesItem>
                        );
                    })}
                    </article>
         )
    }
}
export default Favoritos


