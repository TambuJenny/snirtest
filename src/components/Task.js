import React from 'react'
import './../styles/TaskComponent.scss'

export default function TaskComponent (props)
{

function changeSstate ()
{
 let getDom = document.querySelector('.text')
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
     <div className="DivTask">
        <input type="checkbox" name="" id="" onChange={changeSstate} />
         <p id='taskName' className="text">{props.text}</p>
        <button>
          <img src="" alt="" />
        </button>
        </div>

   </div>
 )
}