import Topo from './componentes/Topo';
import React, {useState} from 'react'

import './App.css';
import Footer from './componentes/Rodape';

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
      <main>
        
      </main>
      <Footer TemaEscuro={changetheme} />
    </div>
  );
}

export default App;
