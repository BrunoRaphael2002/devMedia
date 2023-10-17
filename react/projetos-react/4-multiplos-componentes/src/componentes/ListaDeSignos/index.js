import React from "react";
import Titulo from "../Titulo";
import './style.css';
import ItemLista from "../ItemLista";

export default function ListaDeSignos(){
    return(

    <div>
      <Titulo />

      <div className="lista">
        <ItemLista
          signo="Gênesis" dataInicio="Cap"
          dataFim="50" imagem="assets/biblia.png"/>

<ItemLista
          signo="Êxodo" dataInicio="Cap"
          dataFim="40" imagem="assets/biblia.png"/>

<ItemLista
          signo="Levítico" dataInicio="Cap"
          dataFim="27" imagem="assets/biblia.png"/>

<ItemLista
          signo="Números" dataInicio="Cap"
          dataFim="36" imagem="assets/biblia.png"/>

<ItemLista
          signo="Deuteronômio" dataInicio="Cap"
          dataFim="34" imagem="assets/biblia.png"/>

<ItemLista
          signo="Josué" dataInicio="Cap"
          dataFim="24" imagem="assets/biblia.png"/>

<ItemLista
          signo="Juízes" dataInicio="Cap"
          dataFim="21" imagem="assets/biblia.png"/>

<ItemLista
          signo="Rute" dataInicio="Cap"
          dataFim="4" imagem="assets/biblia.png"/>

<ItemLista
          signo="1 Samuel" dataInicio="Cap"
          dataFim="31" imagem="assets/biblia.png"/>

<ItemLista
          signo="2 Samuel" dataInicio="Cap"
          dataFim="24" imagem="assets/biblia.png"/>

<ItemLista
          signo="1 Reis" dataInicio="Cap"
          dataFim="22" imagem="assets/biblia.png"/>

<ItemLista
          signo="2 Reis" dataInicio="Cap"
          dataFim="25" imagem="assets/biblia.png"/>

<ItemLista
          signo="1 Crônicas" dataInicio="Cap"
          dataFim="29" imagem="assets/biblia.png"/>

<ItemLista
          signo="2 Crônicas" dataInicio="Cap"
          dataFim="36" imagem="assets/biblia.png"/>

<ItemLista
          signo="Esdras" dataInicio="Cap"
          dataFim="10" imagem="assets/biblia.png"/>

<ItemLista
          signo="Neemias" dataInicio="Cap"
          dataFim="13" imagem="assets/biblia.png"/>

<ItemLista
          signo="Ester" dataInicio="Cap"
          dataFim="10" imagem="assets/biblia.png"/>

<ItemLista
          signo="Jó" dataInicio="Cap"
          dataFim="42" imagem="assets/biblia.png"/>


<ItemLista 
          signo="Salmos" dataInicio="Cap"
          dataFim="150" imagem="assets/biblia.png"/>

<ItemLista
          signo="Provérbios" dataInicio="Cap"
          dataFim="31" imagem="assets/biblia.png"/>

<ItemLista
          signo="Eclesiastes" dataInicio="Cap"
          dataFim="12" imagem="assets/biblia.png"/>

<ItemLista
          signo="Cantares" dataInicio="Cap"
          dataFim="8" imagem="assets/biblia.png"/>

<ItemLista
          signo="Isaías" dataInicio="Cap"
          dataFim="66" imagem="assets/biblia.png"/>

<ItemLista
          signo="Jeremias" dataInicio="Cap"
          dataFim="52" imagem="assets/biblia.png"/>


      </div>
    </div>
  )
}
    