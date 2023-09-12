import React from "react";
import Title from './Components/Title/Title'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Tdetail from './Components/Tdetail/Tdetail'
import Adetail from './Components/Adetail/Adetail'
import Canciones from './Components/Canciones/Canciones'
import Albums from './Components/Albums/Albums'
import { Route, Switch} from 'react-router-dom';
import Favoritos from "./Components/Favoritos/Favoritos";



import './css/styles.css'

function App() {
  return (
    <React.Fragment>
    <Title />
    <main>   
    
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/tdetail/:id' component={Tdetail}/>
          { <Route path='/favoritos' component={Favoritos}/> }
          <Route path='/canciones' exact component={Canciones}/>
          <Route path='/albums' component={Albums}/>
          <Route path='/adetail/:id' component={Adetail}/>
          
        </Switch>
      </main>  
      <Footer />

    </React.Fragment>

  );
}

export default App;
