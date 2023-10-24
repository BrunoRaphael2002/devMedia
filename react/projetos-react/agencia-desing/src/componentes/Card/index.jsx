import React from 'react';
import './index.css';

export default function Card(props){
      
    return(
       <>
       <section id='card-box' >
        
            
                <p className='Date'>{props.Data}</p>
                <h4>{props.Titulo}</h4>
                <p className='paragrafo-Empresa'>{props.Empresa}</p>
                <p >{props.paragrafo}</p>
          
        </section>
        </>
       

       
    );
}