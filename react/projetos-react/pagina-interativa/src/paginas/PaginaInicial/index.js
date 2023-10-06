import {useState} from 'react';


function PaginaInicial(){

    const   [ numeroAleatorio, setNumeroAleatorio ] = useState(1);

    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        setNumeroAleatorio(novoNumero);
      }

    return(
        <div>
            <h1>Numero Aleatorio :</h1>
            <h1>{numeroAleatorio}</h1>
            <div>
                <label>Clique no botão abaixo para gerar um numero aleatorio:</label>

                <button onClick={ gerarNumero }>Gerar numero</button>
            </div>
        </div>
    );
}

export default PaginaInicial;