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
        this.setState({valor: event.target.value}, //agarrar el valor que pusieron en el imput
        ()=> this.props.actualizar(this.state.valor)
        )
    }    

    render(){
        return(
                 <form className='form' onSubmit={(event) => this.evitarSubmit(event)}>
                  <input className='imputForm' type='text' onChange={(event)=> this.controlarCambios(event)} value={this.state.valor}/>
           </form>

        )
    }

}
export default Formulario

