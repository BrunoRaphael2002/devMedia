import React from "react";
import Banner from "./banner/";
import Produtos from "./produtos";
import Sobre from "./sobre";
import Contato from "./contato";


export default function Main(){
    return(
        <main >
           <Banner/>
           <Produtos/>
           <Sobre/>
           <Contato/>
          
        </main>
    );
}