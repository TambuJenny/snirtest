import React from 'react'
import './../styles/TaskComponent.scss'

export default function TaskComponent (props)
{
    
  if(!props.verification)
  {
    let getElem = document.getElementById(`${props.id}`)
    getElem?.classList.add('enable')
  }

function changeSstate ()
{
 let getDom = document.getElementById(`${props.id}`)
 alert(props.id)
 if(props.verification)
 {
  if(getDom.classList.contains('end'))
    getDom.classList.remove('end')
  else
  getDom.classList.add('end')
 
 }
 
}
 return (
   <div className="TaskDiv">
     <p className="title"> {props.title}</p>
     <div className="DivTask">
        <input type="checkbox" enable ='false'name="" onChange={changeSstate} />
         <p className="text" id={props.id}>{props.text}</p>
       <div className="btn">
       <button>
          <img src="" alt="" />
        </button>
       </div>
        </div>
   </div>
 )
}