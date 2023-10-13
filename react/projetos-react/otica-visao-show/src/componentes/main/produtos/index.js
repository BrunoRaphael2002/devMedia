import React from "react";



export default function Produtos(){
    return(
        <section>

                    <h2>Nossos produtos
                    </h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                Óculos de grau</p>

                <section className="box-img">
                <img src="/assets/imagens/oculos01.png" alt=""/>
                <img src="../assets/imagens/oculos02.png" alt=""/>
                <img src="../assets/imagens/oculos03.png" alt=""/>
                <img src="../assets/imagens/oculos04.png" alt=""/>
                </section>

                <p>Todos os nossos produtos incluem:</p>
                <ul>

                <li>Garantia de 1 ano
                </li>

                <li>Manutenção preventiva</li>

                <li>Descontos especiais na compra da segunda unidade</li>

                <li>Flexibilidade de pagamento
                </li>

                </ul>

        </section>
    );
}