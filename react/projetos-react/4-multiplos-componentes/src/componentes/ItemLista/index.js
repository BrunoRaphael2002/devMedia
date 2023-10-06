import React from "react";
import './style.css';

export default function ItemLista(props){
    return(
        <div className="boxSigno">
            <div className="nomeSigno">
                {props.signo}
            </div>

          <img className="imagemSigno" src ={props.imagem}  alt = { props.signo }/>

        <div className="periodoNascimento">
           {props.dataInicio} - {props.dataFim}
        </div>

        </div>
    )
}

/*
        O nome do parâmetro precisa ser props?
Não necessariamente. Assim como em uma função esse parâmetro pode ter qualquer nome, porém é comum entre os programadores React utilizar o nome props.

Por que as propriedades foram colocadas dentro de chaves?
Sempre que precisamos exibir um código JavaScript dentro do JSX utilizamos chaves. Neste caso estamos exibindo uma variável.

Outros exemplos:

Uma operação matemática:
<p> { 1 + 2 } </p>
O retorno de uma função:
<p> { retornaTexto() } </p>


        Forma alternativa de receber props:
          export default function ItemProduto({ nomeProduto, valor })

Forma tradicional de receber props:
            export default function ItemProduto(props)

*/