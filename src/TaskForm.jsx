import { useState } from "react"
function TaskForm({setTasks}){
    const [text,setText] = useState('')
    const [date,setDate] = useState('')
    function handleSubmit(event){
        event.preventDefault();
        const newTask = {
            id:Date.now(),
            text:text,
            date:date,
            completed:false
        }
        setTasks(t=>[...t,newTask])
        setText('')
        setDate('')
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>What is to be done?</label>
            <input type="text" value={text} onChange={(event)=>setText(event.target.value)} placeholder="Enter Task Here" />
            <label>When Is it supposed to be done</label>
            <input type="date" value={date} onChange={(event)=>setDate(event.target.value)} placeholder="Set its date" />
            <button type="submit">Add to List</button>
        </form>
    )
}
export default TaskForm