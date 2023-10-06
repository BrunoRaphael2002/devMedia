import React from 'react';
import './App.css';
import ListaDeSignos from './componentes/ListaDeSignos';



function App() {
  return (
    <div className="App">
         <ListaDeSignos />  
            
    </div>
  );
}

export default App;

/*TRABALHANDO COM PROPS

O que vamos aprender?

1-Reaproveitar componentes
2-Utilizar props.

Já aprendemos que quando reaproveitamos um componente podemos alterar uma parte do seu conteúdo através de props. Entenda como é a mecânica do uso de props.

Em termos mais técnicos:

Criamos e exportamos o componente.
Importamos o componente e passamos as propriedades que ele vai exibir.
Reaproveitar um componente ajuda na hora de fazer a manutenção do código além de escrever menos
*/
