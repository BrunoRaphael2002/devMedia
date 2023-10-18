import React ,{useState} from 'react';
import './index.css';



export default function LadingPage(){
        const  [ mudarcor, setMudaCor ] = useState('light-mode');
            const [ mudaicone , setMudaIcone] = useState('../assets/moon.png');
        function AlterarCor(){
            
           if(mudarcor === 'light-mode'){
                setMudaCor('dark-mode');
               
           }
           else{
                setMudaCor('light-mode');
               
           }
        }

        function AlterarIcone(){
            if(mudaicone === '../assets/moon.png'){
                setMudaIcone('../assets/sun.png')
            }
            else{
                setMudaIcone('../assets/moon.png');
            }
        }

    return(
        <div className={mudarcor}>
      <header className='largura-maxima '>
        <nav>
            <img src="../assets/barbearia-logo.png" alt="logo" />
            <button onClick={AlterarCor} className='dark-mode  dark-light light-mode'>
                <img src={AlterarIcone}/>
                Dark</button>
        </nav>
      </header>

      <main >
        <section className='banner'></section>
        <section className='texto largura-maxima'>
            <h1> Bem-vindo a Barber Shop</h1>
            

            <span>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</span>

            <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

          

            <h2 className='destaque'>S. Kelly</h2>
        </section>
      </main>

      <footer >
        <p>Todos os direitos reservados</p>
      </footer>
        </div>
    );
}
