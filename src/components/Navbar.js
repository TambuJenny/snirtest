import React from 'react';
import './../styles/Navbar.scss'
import { Link } from 'react-router-dom';
import Menu from './../img/Vectormenu.png'
import Add from './../img/Vectoradd.png'

export default function Navbar()
{

 return(
  <div className="navbarinfo">
     <div className="menu">
      <button> <img src={Menu} alt="" className="btnmenu" /></button>
        <div className="taskadd">
           <button>
             <img src={Add} alt="" />
             Add produto
           </button>
        </div>
     </div>
     <div className="userInfo">
         <div className="imguser">
             <img src="" alt="" />
         </div>
         <div className="aboutUser">
            <p>Name</p>
            <Link to="" style={{color:"#B4ACF9",fontSize:"0.8em"}}> My account</Link>
         </div>
     </div>
  </div>
    )
}