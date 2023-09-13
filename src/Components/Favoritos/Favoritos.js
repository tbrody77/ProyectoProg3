import React, {Component} from 'react';
import CancionesItem from '../CancionesItem/CancionesItem';

class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            track:[],
            favoritos:[]
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
            <section>
                

                <article className="articleCanciones">
                    {this.state.track.length ? (
                    <><h1 className='cargando'>Canciones Favoritas</h1>
                    {this.state.track.map((cancion) => {
                        return (
                        <CancionesItem cancion = {cancion}></CancionesItem>
                        );
                    })}</>
                    ):<p className='cargando'> 🚨 No tenés canciones favoritas 🚨</p>}
                    </article>
                
                    </section>
         )
    }
}
export default Favoritos


