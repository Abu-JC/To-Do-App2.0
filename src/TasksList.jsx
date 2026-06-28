function TasksList({tasks}){
    return(
        <div>
            <ol>
                {tasks.map(task=>{
                   return <li key={task.id}>{task.text}</li>
                })}
            </ol>
        </div>
        
    )
}
export default TasksList