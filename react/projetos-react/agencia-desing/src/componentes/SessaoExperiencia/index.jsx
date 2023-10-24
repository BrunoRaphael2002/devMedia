import React from 'react';
import Card from '../Card';
import './index.css'

export default function Experiencia(props){
    return(
            <div className={props.SoftDark ? 'softdark ' : 'light '}>
            <section className='limitar-sessao xp'>
                
                    
                        <h2>Experiências De Trabalho</h2>
                                        
                        
                                        <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                                  Sites e Marketing Digital, nos empenhamos diariamente para entregar
                                  resultados que tragam impacto aos nossos clientes.
                                  </p>
                   

            </section>

            <section className={props.SoftDark ? 'softdark Cards limitar-sessao ' : 'light Cards limitar-sessao '}>
                <Card
              Data = "JUNHO 2012 - 2016"
              Titulo = "Web Designer"
              Empresa = "Pied Piper StartUp."
              paragrafo = "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
              />
               

               <Card
                Data = "AGOSTO 2016 - 2019"
                Titulo = "Product Designer"
                Empresa = "E Corp."
                paragrafo = "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
               />
               

                <Card
               Data = "FEVEREIRO 2019 - 2021"
               Titulo = "Digital Consulting"
               Empresa = "Arasaka Inc."
               paragrafo = "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
               />


            </section>
            
            </div>
        
    );

}