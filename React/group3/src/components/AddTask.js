import React from 'react'
import {useState} from 'react'
import './AddTask.css'
export default function AddTask({tasks,setTask,})
 {

const[newtask,setnewTask]=useState('')

function newTask(event)
{
   setnewTask(event.target.value)
}
function delTask()
{
    setnewTask('')
}

function addTask(e)
{
  e.preventDefault();
  const createTask={
    id:Math.floor(Math.random()*100),
    name:newtask,
    complete:false
  }
setTask([...tasks,createTask])

}

  return (
    <div className='addTask'>
    <form >
    <label htmlFor="">Task</label>
    <input type="text" name='newtask' id='newtask' onChange={newTask} value={newtask}/>
    <button className='btn addtask' onClick={addTask}>Add Task</button>
    <span className='btn cleartask' onClick={delTask}>Clear</span>
    </form>
        <h1>{newtask}</h1>

    </div>
  )
}
