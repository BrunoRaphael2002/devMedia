import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
<div>  <h1>  Home  </h1> 
       <Link to="/Sabores">Sabores</Link><br></br>
        <Link to="/Sobre">Sobre</Link>    
 </div>
    );
}