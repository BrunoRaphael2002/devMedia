import React from 'react';
import './index.css';

export default function Footer(props){
    return(
        <footer>
            <p className={props.TemaEscuro ? 'escuro' : 'claro'} >olá mundo</p>
        </footer>
    );
}