import React from 'react';
import './App.css';
import Rotas from './Rotas';

const App = () => (
  <div className="App">
    <Rotas/>
  </div>
);

export default App;


//Estudo de hoje:
//1-aprender os conceitos básicos sobre rotas que são:
//2-Instalar a biblioteca react-router-dom;
//3-Criar uma rota;
//4-Gerenciar nossas rotas.

//O que é uma Rota?
//Uma rota é basicamente a associação entre uma URL e um componente. Para criarmos rotas no React utilizamos a biblioteca react-router-dom.

//instalando a bilbioteca no terminal  npm install --save react-router-dom (escrever no terminal: cmd ou powershell no windows)

//A principal funcionalidade do React no front-end é criar SPAs. Uma SPA é uma página que basicamente não é recarregada para executar uma ação ou para exibir uma nova tela para o usuário.