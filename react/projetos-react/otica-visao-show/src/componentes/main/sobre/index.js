import React from "react";
import './index.css';

export default function Sobre(){
    return(
<section className="sobre" id="SOBRE">
    
<section className="limitar-secao  container-sobre">
    <h1>QUEM SOMOS NÓS?
    </h1>
    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
        </p>
    
    
    <section className="box-sobre">
    
    <img src="../assets/imagens/loja.png" alt="loja"/>
    
    <div className="sobre-info">
        <h2>Nossas Filiais
        </h2>
        <p>Hoje temos mais de 20 filiais pelo Brasil e na América
        </p>
    </div>
    
   
    
    <div className="sobre-info">
        <h2>Atendimento flexível</h2>
        <p>Nossa equipe possui é treinada para te atender</p>

        
    </div>
    <img src="../assets/imagens/atendimento.png" alt="atendimento"/>
    </section>
    
    
</section>


</section>
    );
}