import React from "react";
import './index.css';


export default function Footer(){
    return(
    <footer >   
<div className="limitar-secao footer-box">  
        <img src="./assets/logo.png" alt="logo" title="Logo da loja"/> 

    <div className="footer-text">
          <h3>ENDEREÇO</h3> 

            <p>Av. Bernardino de Campos, 98 </p>  
            <p>São Paulo, SP 12345-678</p>   
     </div >

    <div className="footer-text"> 
      <h3>CONTATO</h3> 

            <p>info@meusite.com</p>  
            <p>Tel: (11) 3456-7890</p>   
    </div>

    <div className="footer-text">
            <h3>HORÁRIOS</h3> 
        <p>ABERTO TODOS OS DIAS</p>     
        <p>10:00 - 22:00</p>
    </div>

  </div>
  <div className="limitar-secao direito-autoral">
      <p >Gelateria. Orgulhosamente desenvolvido por <a href="https://brunoraphael2002.github.io/Portifolio/Portifolio/index.html" target="blank">Bruno Raphael Medeiros da Silva</a></p>
  </div>


             </footer>
    );

}