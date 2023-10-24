import Topo from './componentes/Topo';
import Footer from './componentes/Rodape';
import Banner from './componentes/SessaoBanner';
import Experiencia from './componentes/SessaoExperiencia';


import React, {useState} from 'react';
import './App.css';


function App() {
  const [changetheme,setChangeTheme] =useState(false);

  function OnClickChangetheme(){
    if(changetheme === false){
        setChangeTheme(true)
    }
    else{
      setChangeTheme(false);
    }
  }


  return (
    <div>
      <Topo ChangeTheme={OnClickChangetheme}  DarkTheme={changetheme}/>
      <Banner DarkTheme={changetheme}/>
      <Experiencia SoftDark={changetheme}/>
      <Footer DarkTheme={changetheme} />
    </div>
  );
}

export default App;
