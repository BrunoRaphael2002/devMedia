import React from 'react';
import './index.css';



export default function Topo (props){

/* Obs como funcionam as props(ao menos o que eu entendi testando) 

        1- Analise o arquivo App.jsx perceba que a funcionalidade o State Hook foi criada nele. 

        2- Para a propriedade funcionar em outros componentes ela deve ser passada dentro do componente como pode ser visto no arquvo App.jsx <Topo mudartema={Changetheme} darkMode={changetheme}

        3- sei que atualmente(20/10/2023 17:56) o nome não está muito intuitivo porem se atente ao seguinte: o nome que vai dentro do componete Topo mudartema esse nome escolhido pode ser qualquer nome e é esse nome que vai ser passado dentro do arquivo topo.jsx após o props.  
        já o nome que vai dentro do {} como o {Changetheme} no componente topo o e o segundo {hangetheme} o primeiro é a função a qual vai ser colocada no botão pelo Event onClick e o segundo é a constante ("variavel " )  pois é a constante vai ser responsavel por dizer ao codigo que o valor inicial é por exemplo background-color: white;
        e quando ocorrer o evento de clique por meio do botão a pagina deve ficar com um background-color: darkblue;

        4- como fazer a mudança de cor?

        para fazer a mudança de cor é nescessario passar uma classe para o objeto  e para fazer isso se passa a propriedade ou seja props.+o nome que foi dado + uma estrutura condicional 

        exemplo:

        <header className={props.darkMode ? 'dark' : 'light' }>

        lebrando que utilizando props ou State Hook é possivel modificar no front-end a cor de uma pagina , imagem, texto, tudo que envolver html e css 

        (Eplicação pessoal para não esquecer como eu entendi que funciona)
*/
                



            return(
                    <div className='test'>
                       <header className={props.DarkTheme ? 'dark' : 'light' }>

         <nav className='limitar-sessao'>

         <img src="../assets/logo.png" alt="logo" />

         <button onClick={props.ChangeTheme}  className={props.DarkTheme ?"AlterarTema sun" : 'AlterarTema moon' } ><img src={props.DarkTheme ? '../assets/sun.png ' : '../assets/moon.png'} alt="moon" /></button>

         

        </nav>

         </header>
                    </div>
            );
}