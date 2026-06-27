import TasksList from "./TasksList.jsx"
function App(){
  const tasks = [{id:0,text:'Go Buy A cake',completed:false},
           {id:1,text:'Walk to church',completed:true},
           {id:2,text:'Make the React App',completed:true},
           {id:3,text:'Learn MongoDB',completed:false},      
  ]
  return(
    <>
    <TasksList tasks={tasks}/>
    </>
  )
}
export default App