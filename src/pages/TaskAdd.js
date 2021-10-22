import React from 'react';
import Navbar from './../components/Navbar';
import './../styles/Task.scss'

export default function Task()
{
 return(
     
     <div>
        <header>
         <Navbar/>
       </header>
       <body>
        <div className="bodyelement">
        <div className="top">
         <h3> Meus Produtos </h3>
         <p>Produtos vendidos, Produtos postado, produtos disponivel </p>
        </div>
        </div>
       </body>
     </div>
    
    )
}