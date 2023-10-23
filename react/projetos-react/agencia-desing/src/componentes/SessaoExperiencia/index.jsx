import React from 'react';
import Card from '../Card';

export default function Experiencia(){
    return(
            <>
            <section>
                <h2>Experiências De Trabalho</h2>

                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
          </p>

            </section>

            <section className='Cards'>
                <Card
                Data="22/22/2022"
                Titulo= "Hello world"
                Empresa= "Empresa"
                paragrafo= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, reiciendis! Natus commodi quisquam facere laudantium, saepe quo officia, blanditiis earum adipisci assumenda est quia dicta cum illo reprehenderit, consequuntur doloribus?"/>
               

               <Card
                Data="22/22/2022"
                Titulo= "Titulo"
                Empresa= "Empresa"
                paragrafo= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, reiciendis! Natus commodi quisquam facere laudantium, saepe quo officia, blanditiis earum adipisci assumenda est quia dicta cum illo reprehenderit, consequuntur doloribus?"/>
               

                <Card
                Data="22/22/2022"
                Titulo= "Titulo"
                Empresa= "Empresa"
                paragrafo= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, reiciendis! Natus commodi quisquam facere laudantium, saepe quo officia, blanditiis earum adipisci assumenda est quia dicta cum illo reprehenderit, consequuntur doloribus?"/>


            </section>
            
            </>
        
    );

}