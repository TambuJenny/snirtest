import React,{createContext, useState} from 'react'
import './../styles/Singin.scss'
import Title from '../components/Title'
import Google from './../img/Vectorg.png'
import Facebook from './../img/Vectorf.png'

export const ValoreUserContext=createContext()



export default function Singin()
{
 return(
    <div className="singIndex">
        <div className="menusingIndex">
         <Title/>
          <div className="allsocialink">
             <div className="sociaLink">
             <div className="imglink">
             <img src={Google} alt="" />
             </div>
             <div className="urlink">
             <a href="" className="">
                  Google
              </a>
             </div>
              </div>
              <div className="sociaLink">
             <div className="imglink">
             <img src={Facebook} alt="" />
             </div>
             <div className="urlink">
             <a href="" className="">
                  Facebook
              </a>
             </div>
              </div>
          </div>
          <div className="alldata">
          <form action="">
          <label>Your email</label>
          <input type="email" placeholder="Pleace insert your e-mail adress" />
          <label>Password</label>
          <input type="Password" placeholder="Pleace insert your e-mail adress" />
          <br />
          <button type="submit" className="buttonLink" style ={{width:"100%"}}> Sign in</button>
          </form>
          </div>
          
        </div>
    </div>

 )
}