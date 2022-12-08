import OneTask from "./components/OneTask";
import ButtonDeleteAll from "./components/ui/ButtonDeleteAll";

import { useState } from "react"


const App = () => {
  
  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState("") 
  

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));   
  };

  const deleteAll = () => {
    setToDoList ([])
  }

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true}
        } else {
          return task
        }
      })
    )
  }

  return(
    <div className="App">
      <h1>Seznam</h1>

      <div className="addTask">
        <input className="inputText" type="text" onChange={handleChange}/>
        <button onClick={addTask} className = "btnInput">Přidat položku</button>
      </div>

      <div className="list">
        {toDoList.map((task) => {
          return ( 
            <OneTask 
            taskName={task.taskName} 
            id={task.id} 
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}            
          />

          )
        })}  
      </div>
      
      <div className="action">
          <ButtonDeleteAll deleteButton={deleteAll}/>        
      </div>
    </div>
     
  )
}

export default App