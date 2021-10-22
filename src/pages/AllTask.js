import React from 'react';
import Navbar from '../components/Navbar';
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
         <h3> My Tasks </h3>
         <p>Produtos vendidos, Produtos postado, produtos disponivel </p>
        </div>
        <div className="inputDiv">
          <button>
            <img src="" alt="" />
          </button>
          <input type="text" placeholder="Search" />
        </div>
        <div className="taskDiv">
          <h3>Tasks</h3>
        </div>
        </div>
       </body>
     </div>
    
    )
}