import React,{useState,useContext,createContext} from 'react';
import Navbar from '../components/Navbar';
import './../styles/Task.scss'
import Task from '../components/Task'

import { DadoTarefa } from '../Routes';

export default function TaskComponent()
{

const DadosUser = useContext(DadoTarefa)
 
  const [value,setvalue]= useState('')
    const tarefas =[
      {
        
        id:1,
        nome:'Dormir',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in deserunt eveniet nostrum, expedita repudiandae ducimus, non provident velit fuga sapiente quaerat quod id? Blanditiis ab molestias maxime facere? Nam?',
        hora: '15:30',
        estado: true

      },
      {
        id:2,
        nome:'Comer',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in deserunt eveniet nostrum, expedita repudiandae ducimus, non provident velit fuga sapiente quaerat quod id? Blanditiis ab molestias maxime facere? Nam?',
        hora: '10:30',
        estado: true

      },
      {
        id:3,
        nome:'Jogar bola',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in deserunt eveniet nostrum, expedita repudiandae ducimus, non provident velit fuga sapiente quaerat quod id? Blanditiis ab molestias maxime facere? Nam?',
        hora: '18:30',
        estado: false

      },
      {
        id:4,
        nome:'Jogar bola',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in deserunt eveniet nostrum, expedita repudiandae ducimus, non provident velit fuga sapiente quaerat quod id? Blanditiis ab molestias maxime facere? Nam?',
        hora: '18:30',
        estado: false

      },
      {
        id:5,
        nome:'Jogar bola',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in deserunt eveniet nostrum, expedita repudiandae ducimus, non provident velit fuga sapiente quaerat quod id? Blanditiis ab molestias maxime facere? Nam?',
        hora: '18:30',
        estado: false

      },
      {
        id:6,
        nome:'Jogar bola',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in deserunt eveniet nostrum, expedita repudiandae ducimus, non provident velit fuga sapiente quaerat quod id? Blanditiis ab molestias maxime facere? Nam?',
        hora: '18:30',
        estado: false

      }

    ]
    

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
          <input type="text" placeholder="Search" value={value} onChange={(e)=>{
               setvalue(e.target.value) 
            let vetor = []
                tarefas. map(tarefas =>{
                        vetor.push(tarefas.nome)
                })

                for (let index = 0; index < vetor.length; index++) {
                    
                }
            

          }}/>
        </div>
        <div className="taskDiv">
          <h3>Tasks</h3>
          <div className="taskk">
                  {
                   
            tarefas.map(tarefas =>[
              <Task key ={tarefas.id} title={tarefas.nome}  text={tarefas.descricao} verification={tarefas.estado} date={tarefas.hora} id={tarefas.id} ></Task>
            ])
          }
          </div>
         </div>
        </div>
       </body>
     </div>
    
    )
}
