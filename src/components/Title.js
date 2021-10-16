import React from 'react'
import './../Global.scss'
import { Link } from 'react-router-dom'

export default function Title() 
{

 return(
  <div className="title"> 
    <h3><Link to="/"><label style={{color:"#B4ACF9"}}>TASK</label>Manager</Link></h3>
 </div>
  
  )
}