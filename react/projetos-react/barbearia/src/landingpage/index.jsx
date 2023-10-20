import React ,{useState} from 'react';
import './index.css';



export default function LadingPage(){
        const  [ mudarcor, setMudaCor ] = useState('light-mode');

          const [ mudartexto, setMudarTexto] = useState('Dark');

          const [mudaricone, setMudarIcone] =useState("../assets/moon.png");

          const [filtroimg , setFiltroImg] = useState('filter');

          const [link, setLink] = useState('link')
     

    
    
            
        function AlterarTema(){
            /* Este codigo diz ao computador que se mudar a cor for modo claro então execute o if e se não for execute o else logo essa condicional ela é modificada pelo botão no onClick do react */ 

           if(mudarcor === 'light-mode'){
                setMudaCor('dark-mode');  
                setMudarIcone("../assets/sun.png");
                setMudarTexto('light');
                setFiltroImg('filter');
                setLink('link-dark');
                
           }
           else{
                setMudaCor('light-mode'); 
                setMudarIcone("../assets/moon.png"); 
                setMudarTexto('Dark');
                setFiltroImg('');
                setLink('link');
           }


          /* Obs não é nescessario criar varios if e else para o codigo funcionar
          
          if(mudartexto === 'Dark'){
            setMudarTexto('light');
         }else{
          setMudarTexto('Dark');
         }


         if(mudaricone ===  "../assets/moon.png"){
          setMudarIcone("../assets/sun.png");
        }else{
          setMudarIcone("../assets/moon.png");
       }*/
         
        }

  

    

    return(
        <div className={mudarcor}>
      <header className='largura-maxima '>
        <nav>
            <img className= {filtroimg} src="../assets/barbearia-logo.png" alt="logo" />
            <button onClick={AlterarTema}  className='bnt'>
                <img src={mudaricone} alt='icone'/>
                {mudartexto} </button>
                 
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
        <p> Desenvolvido por <a className={link}  href="https://brunoraphael2002.github.io/Portifolio/Portifolio/index.html">Bruno Raphael Medieros da Silva</a></p>
      </footer>
        </div>
    );
}
