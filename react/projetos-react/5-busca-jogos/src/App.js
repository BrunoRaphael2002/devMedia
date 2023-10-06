import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
     <header>
      <nav className='link-topo'>
        <h1>LO<span>GO</span></h1>
        <ul className='links-nav'>
          <li>Home</li>
          <li>Contato</li>
          <li>Projetos</li>
        </ul>

        <button className='btn'>clique aqui</button>
      </nav>
     </header>
     <section className='react'>
      <a href="https://react.dev/learn" target='blank'>Aprenda React</a>
     </section>
   </div>
  );
}

export default App;
