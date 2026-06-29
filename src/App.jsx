import { useState } from "react"
import TasksList from "./TasksList.jsx"
import TaskForm from "./TaskForm.jsx"
function App(){
  const[tasks,setTasks] = useState([{id:0,text:'Go Buy A cake',completed:false},
           {id:1,text:'Walk to church',completed:true},
           {id:2,text:'Make the React App',completed:true},
           {id:3,text:'Learn MongoDB',completed:false},      
  ])
  const[view,setView] = useState('list')
  return(
    <>
      {view === 'list' ? (
        <>
          <TasksList tasks={tasks}/>
          <button onClick={() => setView('form')}>Add Task</button>
        </>
      ) : (
        <>
          <TaskForm setTasks={setTasks} />
          <button onClick={() => setView('list')}>Back to List</button>        
        </>
      )}
    </>
  )
}
export default App
