import Topo from './componentes/Topo';
import Footer from './componentes/Rodape';
import Banner from './componentes/SessaoBanner';
import Experiencia from './componentes/SessaoExperiencia';
import Card from './componentes/Card'

import React, {useState} from 'react';
import './App.css';


function App() {
  const [changetheme,setChangeTheme] =useState(false);

  function Changetheme(){
    if(changetheme === false){
        setChangeTheme(true)
    }
    else{
      setChangeTheme(false);
    }
  }


  return (
    <div>
      <Topo mudartema={Changetheme}  darkMode={changetheme}/>
      <Banner/>
      <Experiencia/>
      <Card/>
      <Footer />
    </div>
  );
}

export default App;
