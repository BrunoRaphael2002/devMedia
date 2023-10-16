import React from "react";
import './index.css';

export default function Header(){
    return(
        <header >
            <nav className="limitar-secao">
            <img className="logo" src="../assets/imagens/logo.png" alt="logo"/>              
                <ul>
                    <li><a href="#PRODUTOS">PRODUTOS</a></li>
                    <li><a href="#SOBRE">SOBRE</a></li>
                    <li><a href="#CONTATO">CONTATO</a></li>
                </ul>
            </nav>
        </header>
    );
}