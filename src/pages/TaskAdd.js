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
         <h3> My Tasks</h3>
         <p>Register your tasks and have a better monitoring of your activities</p>
        </div>
        </div>
       </body>
     </div>
    
    )
}