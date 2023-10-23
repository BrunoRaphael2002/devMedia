import React from 'react';
import './index.css';

export default function Card(props){
      
    return(
       <>
       <section className='box-cards'>
        
            
                <p>{props.Data}</p>
                <h1>{props.Titulo}</h1>
                <h2>{props.Empresa}</h2>
                <p>{props.paragrafo}</p>
          
        </section>
        </>
       

       
    );
}