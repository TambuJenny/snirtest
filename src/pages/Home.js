import React, {useContext} from 'react'
import './../styles/Home.scss'
import { Link } from 'react-router-dom'
import imgIndex from './../img/Reading list-cuate 1.png'
import Title from '../components/Title'
import {DadoTarefa} from  './../Routes'
import ModalLog from './../components/LoginModal'



export default function Home ()
{
 const listMenu = ['About','Cases','Resources']
 const {teste, seteste} = useContext(DadoTarefa)
 seteste('teste')
 return(
    <div className="principalHome">

      <header className="headerIndex">
       <Title/>
       <div className="menu"> 
        {
          listMenu.map(element =>(
           
           <Link to={"/"+element} id= {element}  className="colorbutton"  >{element}</Link>
          ))
          
       }
        {/*  <Link to="" style={{color:'whiteSmoke'}}>{lista[1]}</Link>*/ }
       </div>
      
       <div className="buttonIndexSing">
       <Link to="" className="buttonLink">Sign in</Link>
       </div>
       

      </header>

      <body className="bodyIndex">
        <ModalLog/>
     <p>  {teste}</p>
       <div className="descriptionIndex">
           <div className="greatText">
            <p><b style={{color:'#B4ACF9',textDecoration:'Bold'}}>Creative Digital</b> Design Agency is looking for new talent</p>
           </div>
          <div className="smallText">
           <p>Creative Digital Agency is looking for new talent </p>
          </div>
          <div className="buttondesc">
           <Link to='/singin' className="buttonLink" style={{width:'170px'}}> Get Started</Link>
          </div>
       </div>
       <div className="imgIndex">
          <img src={imgIndex} alt="" className=""/>
       </div>
      </body>


    </div>
  
  )
}