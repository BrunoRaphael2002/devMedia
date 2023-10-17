import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import './index.css';

export default function Sabores(){
    return(
       <div>
        <Header/>
        <main>
            <section className="Sabores-banner">
                    <div className="titulo-sabores">
                        <h1>NOSSOS SABORES</h1>
                    </div>
            </section>

            <section className="Container-sabores  limitar-secao">
            <h1>SABORES DE SORVETE</h1>

                <section className="Sabores-sorvete">
               
                    <div className="Card-sabores">
                        <img src="./assets/sabor-oreo.png" alt="Oreo" title="Sorvete de Oreo"/>                   
                        <h3>Sorvete de Oreo</h3>

                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>

                    </div>

                    <div className="Card-sabores">
                        <img src="./assets/sabor-pistache.png" alt="Pistache" title="Sorvete de Pistache"/>   

                        <h3>Sorvete Pistache</h3>

                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>

                    </div>

                    <div className="Card-sabores">
                        <img src="./assets/sabor-cookies-avela.png" alt="Avelã" title="Sorvete de Cookies com Avelã"/> 

                        <h3>Sorvete Cookies & Avelã</h3>

                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>

                    </div>

                    <div className="Card-sabores">
                        <img src="./assets/sorbet-kiwi.png" alt="Kiwi" title="Sorvete de Kiwi"/>      

                        <h3>Sorvete de Kiwi</h3>

                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>

                    </div>

                    <div className="Card-sabores">
                        <img src="./assets/sorbet-morango.png" alt="Morango" title="Sorvete de Morango"/>       

                        <h3>Sorvete de Morango</h3>

                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>

                    </div>

                    <div className="Card-sabores">
                        <img src="./assets/sorbet-limao.png" alt="Limão" title="Sorvete de Limão"/>      

                        <h3>Sorvete de Limão Siciliano</h3>

                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>

                    </div>

                  
                </section>

            </section>
        </main>
       <Footer/>
       </div>
       
    );
}