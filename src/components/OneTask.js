import "./OneTask.css"

const OneTask = (props) => {
    return (
        <div 
        classname="task"
        style={{width: "500px", margin: "0 auto", backgroundColor: props.completed ? "green" : "rgb(99, 73, 123)"}}
        >
          <button className="btncomplete" onClick={() => props.completeTask(props.id)}>hotovo</button>
          <button className="btndelete" onClick={() => props.deleteTask(props.id)}> Koupeno </button>         
          <h2 className="task">{props.taskName}</h2>      
        </div>    
        
    )
}

export default OneTask
