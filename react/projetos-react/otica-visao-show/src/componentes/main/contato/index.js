import React from "react";
import './index.css';


export default function Contato(){
    return(
            <section className=" secao-contato" id="CONTATO">

    <section className="limitar-secao">
        <h1> Fale conosco         </h1>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
        <div className="box-info">
            <div className="info">
            <h4>Contato</h4>
              <div>
                  <img src="assets/imagens/local.png" title="Ícone local" alt="Pino de localização"/>
                  <span>Nova Iguaçu, RJ</span>
              </div>
              <div>
                  <img src="assets/imagens/telefone.png" title="Ícone telefone" alt="Ícone de um telefone"/>
                  <span>(21) 9999-9999</span>
              </div>
              <div>
                  <img src="assets/imagens/email.png" title="Ícone email" alt="Ícone de uma carta"/>
                  <span>contato@oticavida.com</span>
              </div>
          </div>
          <div className="info">
              <h4>Nossas Redes Sociais</h4>
              <div>
                  <img src="assets/imagens/fb.png" title="Ícone facebook" alt="logo do facebook"/>
                  <span>/OticaVida</span>
              </div>
              <div>
                  <img src="assets/imagens/ig.png" title="Ícone instagram" alt="logo do instagram"/>
                  <span>@oticavidarj</span>
              </div>
              <div>
                  <img src="assets/imagens/tt.png" title="Ícone twitter" alt="logo do twitter"/>
                  <span>@oticavidarj</span>
              </div>
            </div>
        </div>
    </section>
            </section>
    );
}