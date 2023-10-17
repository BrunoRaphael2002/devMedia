import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import './index.css';

export default function Sobre(){
    return(
         <div>
            <Header/>
                <main>

<section className="banner-sobre">
    <div className="titulo-sobre">
        <h1>A GELATERIA</h1>
    </div>
</section>

       
        <section className="sobre limitar-secao"> 

                <h1>Sobre Nós</h1> 
                    <span>Nós simplesmente amamos sorvete!</span>
                        <p>
        Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
        </p>

        <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família.</p>

        <p>Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>

        </section>
            <section className="sobre-image">
            <div>
                <img src="./assets/sobre-image.jpg" alt=""/>
                <img src="./assets/sorveteria.jpg" alt=""/>
            </div>
            </section>
        


                </main>
            <Footer/>
         </div>   
    );
}