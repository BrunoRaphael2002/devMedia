import React from 'react';
import "./index.css";

export default function Banner(props){
    return(
        <div id='sessao-banner'>
            <section className= {props.DarkTheme ? ' Banner dark' : 'Banner light'}>
                <img src="../assets/banner.png" alt="logo" />
                <section className='Info-Banner'>
                    <p> BRANDING / UI / UX / TECNOLOGIA</p>

                    <h2>Agência de Branding <span>e design digital</span></h2>
                </section>
            </section>
        </div>

    );
}