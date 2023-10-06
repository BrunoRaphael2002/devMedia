import React from 'react';
import './App.css';

import PaginaInicial from './paginas/PaginaInicial';


function App() {
  return (
    <div className="App">
       <PaginaInicial/>
    </div>
  );
}

export default App;


/*O que vamos aprender?
No curso anterior você aprendeu a criar componentes.
 Neste curso daremos um passo à frente aprenderemos os conceitos:

1-State Hook
2-Evento onClick

O que é State Hook?
O State Hook (useState), basicamente nos permite criar uma variável que ao mudar de valor, automaticamente, será alterada na tela do usuário.

Por exemplo, se a variável nomeProduto for alterada, precisamos que o usuário veja o novo nome do produto - o React permite que isso aconteça de forma automática - ou - reativa, como o nome da tecnologia implica.

O que é o evento onClick?
Ao clicar em um botão é comum que algo aconteça.
Para chamarmos esta ação utilizamos o evento onClick.

import React, { useState } from 'react';
Para criar e utilizar uma variável de estado precisamos importar o Hook useState da dependência react.

Importante:
Funções não possuem estado, por isso ao serem executadas suas variáveis deixam de ser acessíveis. Criar uma variável de estado utilizando o Hook useState significa preservá-la e mantê-la acessível.
Hooks são como gatilhos: mecanismo que permite ao React reagir a um momento específico. Em nosso exemplo, usamos Hooks para renderizar a tela automaticamente toda vez que a variável é modificada, e por isso a chamamos de variável de estado.
Aqui utilizamos o Hook useState para criar uma variável de estado.


Na linha 5 consumimos o Hook useState que foi importado. A sintaxe é:

const [NOME_DA_VARIAVEL_DE_ESTADO, FUNCAO_PARA_USO_INTERNO] =
 useState(VALOR_INICIAL_DA_VARIAVEL);
Vejamos:

NOME_DA_VARIAVEL_DE_ESTADO = é a variável que queremos manter o estado e acompanhar a sua mudança de valor.
FUNCAO_PARA_USO_INTERNO = aqui apenas indicamos um nome de uma função. O React utilizará esse nome de função internamente para acompanhar a mudança de estado da variável. Não precisamos implementar essa função, apenas definir seu nome.
useState(VALOR_INICIAL_DA_VARIAVEL) = no nosso exemplo iniciamos a variável com o valor 1 (mas poderia ser qualquer valor).

*/

