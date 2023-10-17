import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function Header(){
    return(
     <header>
        <div className="limitar-secao">
            <nav>
                <Link to="/"><img src="./assets/logo.png" alt="logo" title="Logo da loja"/> </Link>
            
                 <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Sobre'>Sobre</Link></li>
            <li><Link to='/Sabores'>Sabores</Link></li>
            
                 </ul>
                 
                  </nav>
        </div>
      </header>
    )
}