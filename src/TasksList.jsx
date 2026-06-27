function TasksList({tasks}){
    return(
        <div>
            <ul>
                {tasks.map(task=>{
                   return <li key={task.id}>{task.text}</li>
                })}
            </ul>
        </div>
        
    )
}
export default TasksList