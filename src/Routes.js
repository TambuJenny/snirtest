import React, {createContext} from 'react'
import {Route,BrowserRouter,Switch} from  'react-router-dom'
import {useState} from 'react'
import Index from './../src/pages/Home'
import Singin from './pages/SingIn'
import Task from './pages/AllTask'


 export const DadoTarefa = createContext(''|| {} || [])

 export function Routes() {
   var perfil =
     {
      nome:String,
      senha:String
     }
   
    
  const [teste, seteste]= useState({})
 return(
    <BrowserRouter>
     <DadoTarefa.Provider value={teste,seteste} >
     <Route path="/" exact component={Index}  />
     <Route path="/Singin" component={Singin}  />
     <Route path="/alltask" component={Task}  />
     </DadoTarefa.Provider>
    </BrowserRouter>
  )  
}

