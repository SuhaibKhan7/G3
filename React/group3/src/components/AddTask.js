import {React, useState,useRef} from 'react'
import './AddTask.css'
export default function AddTask({tasks,setTask,})
 {
console.log('AddTask')
// const[newtask,setnewTask]=useState('')
const vref=useRef();
function newTask(event)
{
 console.log('we are using useREf');
 console.log(vref.current.value);
  //  setnewTask(event.target.value)
}
function delTask()
{
    // setnewTask('')
    vref.current.value=''
}

function addTask(e)
{
  e.preventDefault();
  const createTask={
    id:Math.floor(Math.random()*100),
    name:vref.current.value,
    complete:false
  }
setTask([...tasks,createTask])

}

  return (
    <div className='addTask'>
    <form >
    <label htmlFor="">Task</label>
    <input type="text" name='newtask' id='newtask' onChange={newTask} ref={vref} />
    <button className='btn addtask' onClick={addTask}>Add Task</button>
    <span className='btn cleartask' onClick={delTask}>Clear</span>
    </form>
        <h1></h1>

    </div>
  )
}



