import {Route,BrowserRouter,Switch} from  'react-router-dom'
import Index from './../src/pages/Home'
import Singin from './pages/SingIn'
import Task from './pages/TaskAdd'

export default function route()
{
 return(
    <BrowserRouter>
     <Route path="/" exact component={Index}  />
     <Route path="/Singin" component={Singin}  />
     <Route path="/addtask" component={Task}  />
    </BrowserRouter>
  
  )
   
}