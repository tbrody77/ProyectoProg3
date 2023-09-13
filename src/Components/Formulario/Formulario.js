import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state={
           valor: '',
        }
    }
    
    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        console.log('se ejecuta')
        this.setState({valor: event.target.value}, //agarra valor del input
        ()=> this.props.actualizar(this.state.valor)
        )
    }    

    render(){
        return(
                 <form className='form' onSubmit={(event) => this.evitarSubmit(event)}>
                    <label className='nombrecancion'>🔍</label>
                  <input className='imputForm' placeholder='Buscar por canción o artista:' type='text' onChange={(event)=> this.controlarCambios(event)} value={this.state.valor}/>
           </form>

        )
    }

}
export default Formulario

