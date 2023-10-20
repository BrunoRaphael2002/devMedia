import Topo from './componentes/Topo';
import React, {useState} from 'react'

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
    <div className="App">
      <Topo mudartema={Changetheme}  darkMode={changetheme}/>
    </div>
  );
}

export default App;
