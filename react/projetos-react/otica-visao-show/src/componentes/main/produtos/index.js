import React from "react";
import './index.css';


export default function Produtos(){
    return(
        <section className="secao-produtos" id="PRODUTOS">

                        <div className="limitar-secao">
                            <h1>Nossos produtos
                            </h1>
                                                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                                                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                                                Óculos de grau</p>
                            
                                                <section className="box-imgs">
                                                <div className="box-img">
                            <h2>Óculos de grau</h2>
                            <img src="/assets/imagens/oculos01.png" alt=""/>
                                                <p>R$ 500,00</p>
                                                </div>
                            
                                                <div className="box-img">
                            <h2>Óculos transition</h2>
                            <img src="../assets/imagens/oculos02.png" alt=""/>
                            <p>R$ 750,00
                            </p>
                            </div>
                            
                                                <div className="box-img">
                            <h2>Óculos de sol
                            </h2>
                            <img src="../assets/imagens/oculos03.png" alt=""/>
                            <p>R$ 700,00
                                                </p>
                            </div>
                            
                                                <div className="box-img">
                            <h2>Óculos infantil</h2>
                            <img src="../assets/imagens/oculos04.png" alt=""/>
                            <p>R$ 500,00
                                        </p>
                            </div>
                                                </section>
                            
                                                <section className="secao-lista">
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
                                                
                        </div>

            </section>
    );
}