import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  let categorias=[
    
  ];

  let menu = [
    'Home',

  ]


  return (
    <React.Fragment>
      <Navbar elementosMenu={menu}/>
      <h1>My App in React</h1>
      <Button/>
      <main>
      <section className="top-data">
        <Card />
        <Card />
        <Card />
      </section>
      <h2>Categories in database</h2>
      <section className="general-data">
      {
        categorias.map( (unaCategoria, idx) => <Category key={unaCategoria+idx} name={unaCategoria} />)
      }
      </section>
       
      <h2>Personajes de películas</h2>
      
      {/* Acá va el componente <Characters /> */}
      
       
      </main>
      <Footer />
    </React.Fragment>
  );
}

  {{arrayHeroes.map((heroe,i) => <characters key = {i} name = {heroe.name} description= {heroe.description} image ={heroe.photo}/>)}}
const arrayHeroes  = [
       
]; 

export default App;
